import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject, catchError, of, startWith, switchMap } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { GithubService } from '../../core/services/github.service';
import { Breadcrumb, Crumb } from '../../shared/components/breadcrumb/breadcrumb';
import { RepoCard } from '../../shared/components/repo-card/repo-card';

@Component({
  selector: 'app-repos',
  imports: [RepoCard, Breadcrumb],
  templateUrl: './repos.html',
})
export class Repos {
  protected readonly github = SITE.github;

  private readonly githubService = inject(GithubService);
  private readonly reload$ = new Subject<void>();

  protected readonly crumbs: Crumb[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Proyectos', link: '/proyectos' },
    { label: 'Repositorios' },
  ];

  // undefined = cargando, null = error. "Reintentar" vuelve a pedir la lista sin recargar.
  protected readonly repos = toSignal(
    this.reload$.pipe(
      startWith(undefined),
      switchMap(() =>
        this.githubService.getRepos().pipe(
          catchError(() => of(null)),
          startWith(undefined),
        ),
      ),
    ),
  );

  protected reload() {
    this.reload$.next();
  }
}
