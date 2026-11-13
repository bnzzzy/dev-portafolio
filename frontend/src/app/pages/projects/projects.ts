import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, startWith, Subject, switchMap } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { ProjectsService } from '../../core/services/projects.service';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly projectsService = inject(ProjectsService);
  private readonly reload$ = new Subject<void>();
  protected readonly github = SITE.github;
  /** Con menos proyectos que esto, los filtros estorban más de lo que ayudan. */
  protected readonly minForFilters = 4;

  // undefined = cargando, null = error. "Reintentar" vuelve a pedir la lista.
  protected readonly projects = toSignal(
    this.reload$.pipe(
      startWith(undefined),
      switchMap(() =>
        this.projectsService.getAll().pipe(
          catchError(() => of(null)),
          startWith(undefined),
        ),
      ),
    ),
  );

  protected reload() {
    this.reload$.next();
  }

  /** Tecnología seleccionada en el filtro (null = todas). */
  protected readonly selectedTag = signal<string | null>(null);

  /** Lista única de tecnologías de todos los proyectos. */
  protected readonly tags = computed(() => [
    ...new Set((this.projects() ?? []).flatMap((p) => p.tags)),
  ]);

  protected readonly filtered = computed(() => {
    const tag = this.selectedTag();
    const list = this.projects() ?? [];
    return tag ? list.filter((p) => p.tags.includes(tag)) : list;
  });

  protected toggle(tag: string) {
    this.selectedTag.update((current) => (current === tag ? null : tag));
  }
}
