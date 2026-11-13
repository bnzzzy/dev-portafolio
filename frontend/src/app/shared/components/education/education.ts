import { Component, input } from '@angular/core';
import { SITE } from '../../../core/config/site.config';

/** Sección "Formación y certificaciones": título, certificaciones e idiomas. */
@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  /** Dentro de otra sección (pestaña Perfil): sin su propio encabezado. */
  readonly embedded = input(false);
  protected readonly edu = SITE.education;
  protected readonly cloud = SITE.cloudCertifications;
}
