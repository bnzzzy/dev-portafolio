import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SITE } from './config/site.config';

/**
 * Arma el título de la pestaña: "Proyectos · Benjamín López".
 * El inicio usa el título completo con el rol.
 */
@Injectable({ providedIn: 'root' })
export class SiteTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot) {
    const page = this.buildTitle(snapshot);
    this.title.setTitle(page ? `${page} · ${SITE.name}` : `${SITE.name} · Full Stack Developer`);
  }
}
