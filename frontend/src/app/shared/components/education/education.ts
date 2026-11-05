import { Component } from '@angular/core';
import { SITE } from '../../../core/config/site.config';

/** Sección "Formación y certificaciones": título, certificaciones e idiomas. */
@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly edu = SITE.education;
  protected readonly cloud = SITE.cloudCertifications;
}
