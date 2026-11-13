import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { ContactService } from '../../core/services/contact.service';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/** Dónde se guarda el borrador del mensaje (solo en este navegador). */
const DRAFT_KEY = 'contacto:borrador';

/** Dominios de email frecuentes, para sugerir correcciones de tipeo. */
const COMMON_DOMAINS = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'live.com'];

/** Distancia de edición (Levenshtein) entre dos textos cortos. */
function distance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ContactCta],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly contactService = inject(ContactService);

  protected readonly status = signal<Status>('idle');
  /** Email al que se responderá, para confirmarlo después de enviar. */
  protected readonly sentTo = signal('');
  /** Se recuperó un borrador guardado de una visita anterior. */
  protected readonly draftRestored = signal(false);
  protected readonly contactEmail = SITE.contact.email;
  protected readonly minLength = 10;

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(this.minLength)]],
  });

  private readonly emailValue = toSignal(this.form.controls.email.valueChanges, { initialValue: '' });

  /** Sugerencia si el dominio parece un error de tipeo ("gmial.com" → "gmail.com"). */
  protected readonly emailSuggestion = computed(() => {
    const value = this.emailValue().trim().toLowerCase();
    const at = value.lastIndexOf('@');
    if (at < 1) return null;
    const domain = value.slice(at + 1);
    if (!domain || COMMON_DOMAINS.includes(domain)) return null;
    const match = COMMON_DOMAINS.find((d) => distance(domain, d) <= 2);
    return match ? value.slice(0, at + 1) + match : null;
  });

  constructor() {
    this.restoreDraft();
    // El borrador se guarda mientras se escribe, para no perderlo si se cierra la pestaña
    this.form.valueChanges
      .pipe(debounceTime(400), takeUntilDestroyed(inject(DestroyRef)))
      .subscribe((value) => this.saveDraft(value));
  }

  protected applySuggestion() {
    const suggestion = this.emailSuggestion();
    if (suggestion) this.form.controls.email.setValue(suggestion);
  }

  protected submit() {
    // Sin espacios sobrantes al inicio o al final
    const { name, email, message } = this.form.getRawValue();
    this.form.setValue({ name: name.trim(), email: email.trim(), message: message.trim() });

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      // Tras pintar los errores, el foco va al primer campo inválido
      setTimeout(() => document.querySelector<HTMLElement>('.form [aria-invalid="true"]')?.focus());
      return;
    }
    this.status.set('sending');
    this.contactService.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.sentTo.set(this.form.controls.email.value);
        this.status.set('sent');
        this.form.reset();
        this.clearDraft();
        this.draftRestored.set(false);
      },
      error: () => this.status.set('error'),
    });
  }

  protected discardDraft() {
    this.form.reset();
    this.clearDraft();
    this.draftRestored.set(false);
  }

  // El almacenamiento puede no estar disponible (modo privado, bloqueado): nunca debe romper el formulario.
  private restoreDraft() {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw);
      if (draft && (draft.name || draft.email || draft.message)) {
        this.form.patchValue(draft);
        this.draftRestored.set(true);
      }
    } catch {
      /* sin borrador */
    }
  }

  private saveDraft(value: Partial<{ name: string; email: string; message: string }>) {
    try {
      if (value.name || value.email || value.message) localStorage.setItem(DRAFT_KEY, JSON.stringify(value));
      else localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* sin almacenamiento disponible */
    }
  }

  private clearDraft() {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* sin almacenamiento disponible */
    }
  }
}
