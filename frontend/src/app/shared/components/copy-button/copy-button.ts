import { Component, input, signal } from '@angular/core';

/** Botón que copia un texto al portapapeles y muestra "Copiado" por 2 segundos. */
@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.html',
  styleUrl: './copy-button.scss',
})
export class CopyButton {
  readonly value = input.required<string>();
  readonly icon = input('content_copy');
  /** Muestra la etiqueta "Copiar" a la derecha (estilo fila completa). */
  readonly showHint = input(false);

  protected readonly copied = signal(false);

  protected async copy() {
    try {
      await navigator.clipboard.writeText(this.value());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // El navegador no permitió copiar (por ejemplo, sin HTTPS): no hacemos nada.
    }
  }
}
