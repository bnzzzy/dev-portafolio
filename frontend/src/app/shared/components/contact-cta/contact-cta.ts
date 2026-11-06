import { Component } from '@angular/core';
import { SITE } from '../../../core/config/site.config';
import { CopyButton } from '../copy-button/copy-button';

/** Tarjeta "Hablemos de tu próximo proyecto" con agenda, email, redes y Discord. */
@Component({
  selector: 'app-contact-cta',
  imports: [CopyButton],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss',
})
export class ContactCta {
  protected readonly contact = SITE.contact;
  protected readonly github = SITE.github;
  protected readonly linkedin = SITE.linkedin;
}
