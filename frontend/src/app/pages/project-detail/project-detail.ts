import { Component, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { Project } from '../../core/models/project';
import { ProjectsService } from '../../core/services/projects.service';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';

type Result = { project: Project | null; failed: boolean };

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, ContactCta],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly projectsService = inject(ProjectsService);

  // Se llena automáticamente desde la ruta /proyectos/:slug (withComponentInputBinding)
  readonly slug = input.required<string>();

  // undefined = cargando. Un 404 es "no encontrado"; cualquier otro error es una falla de la API.
  private readonly result = toSignal<Result>(
    toObservable(this.slug).pipe(
      switchMap((slug) =>
        this.projectsService.getBySlug(slug).pipe(
          map((project): Result => ({ project, failed: false })),
          catchError((err) => of<Result>({ project: null, failed: err?.status !== 404 })),
        ),
      ),
    ),
  );
  protected readonly loading = computed(() => this.result() === undefined);
  protected readonly project = computed(() => this.result()?.project ?? null);
  protected readonly failed = computed(() => this.result()?.failed ?? false);

  // Siguiente proyecto de la lista, para no terminar el caso en un callejón sin salida
  private readonly all = toSignal(this.projectsService.getAll().pipe(catchError(() => of([]))));
  protected readonly next = computed(() => {
    const list = this.all() ?? [];
    const i = list.findIndex((p) => p.slug === this.slug());
    return list.length > 1 && i !== -1 ? list[(i + 1) % list.length] : null;
  });

  // La pestaña muestra el nombre del proyecto en vez de "Proyecto"
  private readonly title = inject(Title);
  private readonly syncTitle = effect(() => {
    const p = this.project();
    if (p) this.title.setTitle(`${p.title} · ${SITE.name}`);
  });

  /** Baja al bloque de contacto (sin "#": con <base href="/"> recargaría el inicio). */
  protected toContact() {
    document.getElementById('contacto-proyecto')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected reload() {
    location.reload();
  }
}
