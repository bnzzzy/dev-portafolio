import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { GithubService } from '../../core/services/github.service';
import { RepoCard } from '../../shared/components/repo-card/repo-card';

@Component({
  selector: 'app-repos',
  imports: [RepoCard],
  templateUrl: './repos.html',
})
export class Repos {
  protected readonly github = SITE.github;

  // undefined = cargando, null = error
  protected readonly repos = toSignal(
    inject(GithubService)
      .getRepos()
      .pipe(catchError(() => of(null))),
  );
}
