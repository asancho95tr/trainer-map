// src/app/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from '@angular/fire/auth';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private auth = inject(Auth);

  private baseUrl = environment.baseUrl;

  async getProtectedData() {
    const user = this.auth.currentUser;
    const token = await user?.getIdToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return firstValueFrom(
      this.http.get(`${this.baseUrl}/protected`, { headers })
    );
  }
}
