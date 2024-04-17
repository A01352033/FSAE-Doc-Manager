import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './document'; // Assuming you have a Document interface

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = 'https://your-api-endpoint.com/documents';

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
  }

  getDocument(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.baseUrl}/${id}`);
  }

  createDocument(document: Document): Observable<Document> {
    return this.http.post<Document>(this.baseUrl, document);
  }

  updateDocument(document: Document): Observable<Document> {
    return this.http.put<Document>(`${this.baseUrl}/${document.id}`, document);
  }

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
