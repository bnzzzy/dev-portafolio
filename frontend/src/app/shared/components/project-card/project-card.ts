import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: { '[class.wide]': 'wide()' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  /** Versión a ancho completo, para cuando hay un solo proyecto destacado. */
  readonly wide = input(false);
}
