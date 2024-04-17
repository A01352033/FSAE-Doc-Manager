import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Document } from './document/document';
import { Folder } from './folder/folder';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/documento/';
  private token: string;
  private tokenExpirationTime: number;

  constructor(private http: HttpClient) { }

  private async getBearerToken(): Promise<string> {
    if (!this.token || this.isTokenExpired()) {
      const credentials = '_05_2TmOjobg1RAIYKjHrA..:UTD2zC5FI8Gsvb_9o4TufQ..';
      const url = 'https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/oauth/token';
      const body = 'grant_type=client_credentials';
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic ' + btoa(credentials))
        .append('Content-Type', 'application/x-www-form-urlencoded');

      try {
        const response: any = await this.http.post(url, body, { headers: headers }).toPromise();
        this.token = response.access_token;
        this.tokenExpirationTime = Date.now() + (response.expires_in * 1000); // Convert seconds to milliseconds
        return this.token;
      } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
      }
    } else {
      return this.token;
    }
  }

  private isTokenExpired(): boolean {
    return this.tokenExpirationTime && this.tokenExpirationTime < Date.now();
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });
  }

  getRecentDocuments(id_user: number): Observable<Document[]> {
    return from(this.getBearerToken()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.get<Document[]>(`${this.baseUrl}api/recent_docs/${id_user}`, { headers: headers });
      })
    );
  }

  getFolders(id_user: number, id_dept: number): Observable<Folder[]> {
    return from(this.getBearerToken()).pipe(
      switchMap(() => {
        const headers = this.getHeaders();
        return this.http.get<Folder[]>(`${this.baseUrl}api/folders/${id_user}/${id_dept}`, { headers: headers });
      })
    );
  }
}
