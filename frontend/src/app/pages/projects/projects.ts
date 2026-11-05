import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { ProjectsService } from '../../core/services/projects.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = toSignal(
    inject(ProjectsService)
      .getAll()
      .pipe(catchError(() => of(null))),
  );

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
