import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="page stack" style="align-items: flex-start">
      <p class="code text-secondary" aria-hidden="true">$ cd {{ path }}</p>
      <p class="code text-error" aria-hidden="true">bash: no such file or directory</p>
      <h1 class="display-hero">404</h1>
      <p class="muted">Esta página no existe.</p>
      <a class="btn btn--primary" routerLink="/"><span class="icon" aria-hidden="true">terminal</span> Volver al inicio</a>
    </div>
  `,
  styles: `
    .text-error {
      color: var(--error);
    }
  `,
})
export class NotFound {
  protected readonly path = location.pathname;
}
