import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Crumb {
  label: string;
  link?: string; // sin link = página actual
}

/** Ruta de navegación: "Inicio / Proyectos / Página actual". */
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  template: `
    <nav class="crumbs" aria-label="Ruta de navegación">
      <ol>
        @for (c of items(); track c.label; let last = $last) {
          <li>
            @if (c.link && !last) {
              <a [routerLink]="c.link">{{ c.label }}</a>
              <span class="icon crumbs__sep" aria-hidden="true">chevron_right</span>
            } @else {
              <span aria-current="page">{{ c.label }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: `
    .crumbs ol {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 14px;
      color: var(--on-surface-variant);
    }

    li {
      display: inline-flex;
      align-items: center;
      min-width: 0;
    }

    a {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      padding-inline: 0.125rem;
      color: var(--primary);
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }

    [aria-current='page'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 60vw;
    }

    .crumbs__sep {
      font-size: 18px;
      margin-inline: 0.125rem;
      color: var(--outline);
    }
  `,
})
export class Breadcrumb {
  readonly items = input.required<Crumb[]>();
}
