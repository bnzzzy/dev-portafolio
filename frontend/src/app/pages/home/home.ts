import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Subject, catchError, of, startWith, switchMap } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { GithubService } from '../../core/services/github.service';
import { ProjectsService } from '../../core/services/projects.service';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { Education } from '../../shared/components/education/education';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { RepoCard } from '../../shared/components/repo-card/repo-card';

type ProfileTab = 'stack' | 'competencias' | 'formacion';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard, RepoCard, ContactCta, Education],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = SITE;

  // undefined = cargando, null = la API falló (se muestra un aviso con alternativa)
  private readonly projectsService = inject(ProjectsService);
  private readonly reloadProjects$ = new Subject<void>();
  private readonly projects = toSignal(
    this.reloadProjects$.pipe(
      startWith(undefined),
      switchMap(() =>
        this.projectsService.getAll().pipe(
          catchError(() => of(null)),
          startWith(undefined),
        ),
      ),
    ),
  );

  /** Vuelve a pedir los proyectos sin recargar la página. */
  protected reloadProjects() {
    this.reloadProjects$.next();
  }
  protected readonly featured = computed(() => {
    const list = this.projects();
    return list ? list.filter((p) => p.featured) : list;
  });

  // Pestañas de la sección Perfil
  protected readonly tabs = [
    { id: 'stack', label: 'Stack' },
    { id: 'competencias', label: 'Competencias' },
    { id: 'formacion', label: 'Formación' },
  ] as const;
  protected readonly tab = signal<ProfileTab>('stack');

  /** Flechas, Inicio y Fin mueven entre pestañas (patrón ARIA de tabs). */
  protected onTabKey(event: KeyboardEvent, index: number) {
    const last = this.tabs.length - 1;
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    const id = this.tabs[next].id;
    this.tab.set(id);
    document.getElementById('tab-' + id)?.focus();
  }

  // Los repos son complementarios: si GitHub falla, la sección simplemente no aparece
  protected readonly repos = toSignal(
    inject(GithubService)
      .getRepos(3)
      .pipe(catchError(() => of(null))),
  );
}
