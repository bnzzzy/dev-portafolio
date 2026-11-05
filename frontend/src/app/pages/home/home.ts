import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { GithubService } from '../../core/services/github.service';
import { ProjectsService } from '../../core/services/projects.service';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { CopyButton } from '../../shared/components/copy-button/copy-button';
import { Education } from '../../shared/components/education/education';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { RepoCard } from '../../shared/components/repo-card/repo-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard, RepoCard, CopyButton, ContactCta, Education],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = SITE;

  // undefined = cargando. Si la API falla, mostramos la sección vacía en vez de romper la página.
  private readonly projects = toSignal(
    inject(ProjectsService)
      .getAll()
      .pipe(catchError(() => of([]))),
  );
  protected readonly featured = computed(() => this.projects()?.filter((p) => p.featured));

  protected readonly repos = toSignal(
    inject(GithubService)
      .getRepos(3)
      .pipe(catchError(() => of([]))),
  );
}
