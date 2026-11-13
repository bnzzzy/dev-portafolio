import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="page nf">
      <pre class="nf__term code" aria-hidden="true"><span class="text-secondary">$ cd {{ path }}</span>
<span class="nf__err">bash: cd: {{ path }}: No such file or directory</span></pre>
      <div class="nf__text">
        <h1 class="display-hero">404</h1>
        <p class="muted">La página solicitada no existe.</p>
      </div>
      <div class="nf__actions">
        <a class="btn btn--primary" routerLink="/">
          <span class="icon" aria-hidden="true">home</span> Volver al inicio
        </a>
        <a class="btn btn--ghost" routerLink="/proyectos">Ver proyectos</a>
      </div>
    </div>
  `,
  styles: `
    .nf {
      align-items: flex-start;
    }

    .nf__term {
      margin: 0;
      padding: 1rem 1.25rem;
      max-width: 100%;
      overflow-x: auto;
      border-radius: var(--radius-lg);
      border: 1px solid var(--surface-high);
      background: var(--surface-lowest);
      line-height: 1.7;
    }

    .nf__err {
      color: var(--error);
    }

    .nf__text {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .nf__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
  `,
})
export class NotFound {
  protected readonly path = location.pathname;
}
