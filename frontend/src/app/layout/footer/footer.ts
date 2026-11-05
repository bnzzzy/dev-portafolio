import { Component } from '@angular/core';
import { SITE } from '../../core/config/site.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
}
