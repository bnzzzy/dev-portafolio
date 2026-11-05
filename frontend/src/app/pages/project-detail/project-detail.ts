import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { ProjectsService } from '../../core/services/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly projectsService = inject(ProjectsService);

  // Se llena automáticamente desde la ruta /proyectos/:slug (withComponentInputBinding)
  readonly slug = input.required<string>();

  // undefined = cargando, null = no encontrado
  protected readonly project = toSignal(
    toObservable(this.slug).pipe(
      switchMap((slug) => this.projectsService.getBySlug(slug).pipe(catchError(() => of(null)))),
    ),
  );
}
