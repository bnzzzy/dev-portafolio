import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Project } from '../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Project[]>('/api/projects');
  }

  getBySlug(slug: string) {
    return this.http.get<Project>(`/api/projects/${slug}`);
  }
}
