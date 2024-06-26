import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  downloadFile(name: string, versionId: string) : Observable<HttpResponse<Blob>> {
    const url = `http://localhost:3000/downloadblobversion/${name}/${versionId}`;


    return this.http.get(url, {observe:'response', responseType: 'blob' })
}

uploadFile(file: File, text: string) {
  const formData: FormData = new FormData();
  formData.append('file', file);
  formData.append('blobName', text);

  return this.http.post('http://localhost:3000/upload', formData);
}



}
