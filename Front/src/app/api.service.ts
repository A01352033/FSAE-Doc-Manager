import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Document } from './document/document';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/documento/'; // Change this to your API's base URL.

  constructor(private http: HttpClient) { }

  getRecentDocuments(): Observable<Document[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer 1f-JkGIPFPDjK_DFF-iHuA'
    });

    return this.http.get<any[]>('https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/documento/',{headers}
    );
  }
}
