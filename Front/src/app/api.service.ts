import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Document } from './document/document';
import { Folder } from './folder/folder';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/documento/'; // Change this to your API's base URL.
  private headers = new HttpHeaders({
    'Authorization': 'Bearer _8IQv7uGjIaypx-rdowQ9w',
    'Content-Type': 'application/json' // Add any other global headers you need
  });
  constructor(private http: HttpClient) { }

  getRecentDocuments(id_user: number): Observable<Document[]> {
    
    return this.http.get<any[]>(`https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/api/recent_docs/${id_user}`,{headers:this.headers}
    );                            
  }

  getFolders(id_user: number,id_dept:number): Observable<Folder[]> {
    

    return this.http.get<any[]>(`https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/api/folders/${id_user}/${id_dept}`,{headers:this.headers}
    );
  }

  createDocument(documentData: Document): Observable<Document> {
    return this.http.post<Document>('https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/documento/', documentData, { headers: this.headers });
  }

  updateDocument(docId: string, documentData: Document): Observable<Document> {
    const url = `https://gb9eb75e0859bf4-techtitansdb.adb.mx-monterrey-1.oraclecloudapps.com/ords/admin/documento/${docId}`; // Append the document ID to the base URL

    const doc_update = {
      id_folder: documentData.id_folder, 
      nombre: documentData.nombre,
      tipo_documento: documentData.nombre,
      fechacreada:documentData.nombre, 
      version_id: documentData.nombre, 
      descripcion: documentData.nombre,
      id_blob: documentData.nombre,
      fechamodificado: documentData.nombre,
    }
    return this.http.put<Document>(url, doc_update, { headers: this.headers });
  }















}
