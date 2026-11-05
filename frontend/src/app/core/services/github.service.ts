import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Repo } from '../models/repo';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);

  getRepos(limit?: number) {
    const params = limit ? { limit } : undefined;
    return this.http.get<Repo[]>('/api/github/repos', { params });
  }
}
