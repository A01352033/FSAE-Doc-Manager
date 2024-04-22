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







}
