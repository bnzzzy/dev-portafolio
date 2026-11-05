import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Repo } from '../../../core/models/repo';
import { TimeAgoPipe } from '../../pipes/time-ago';

// Color del punto según el lenguaje del repo
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'var(--primary-container)',
  JavaScript: '#f7df1e',
  HTML: '#e34c26',
  CSS: '#663399',
  SCSS: '#c6538c',
  Python: 'var(--tertiary)',
  Go: 'var(--secondary)',
  Java: '#b07219',
  Dockerfile: '#384d54',
};

@Component({
  selector: 'app-repo-card',
  imports: [DecimalPipe, TimeAgoPipe],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.scss',
})
export class RepoCard {
  readonly repo = input.required<Repo>();

  protected readonly languageColor = computed(
    () => LANGUAGE_COLORS[this.repo().language ?? ''] ?? 'var(--outline)',
  );
}
