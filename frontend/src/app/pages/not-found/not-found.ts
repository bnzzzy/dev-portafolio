import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="page stack" style="align-items: flex-start">
      <span class="code text-secondary">$ cd {{ path }}</span>
      <span class="code text-error">bash: no such file or directory</span>
      <h1 class="display-hero">404</h1>
      <p class="muted">Esta página no existe.</p>
      <a class="btn btn--primary" routerLink="/"><span class="icon">terminal</span> Volver al inicio</a>
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
