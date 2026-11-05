import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ContactMessage } from '../models/contact-message';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage) {
    return this.http.post<{ ok: boolean }>('/api/contact', message);
  }
}
