import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { SITE } from '../../core/config/site.config';
import { GithubService } from '../../core/services/github.service';
import { ProjectsService } from '../../core/services/projects.service';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { Education } from '../../shared/components/education/education';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { RepoCard } from '../../shared/components/repo-card/repo-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard, RepoCard, ContactCta, Education],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = SITE;

  // undefined = cargando, null = la API falló (se muestra un aviso con alternativa)
  private readonly projects = toSignal(
    inject(ProjectsService)
      .getAll()
      .pipe(catchError(() => of(null))),
  );
  protected readonly featured = computed(() => {
    const list = this.projects();
    return list ? list.filter((p) => p.featured) : list;
  });

  // Los repos son complementarios: si GitHub falla, la sección simplemente no aparece
  protected readonly repos = toSignal(
    inject(GithubService)
      .getRepos(3)
      .pipe(catchError(() => of(null))),
  );
}
