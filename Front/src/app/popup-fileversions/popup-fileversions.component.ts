import { Component,ViewChild } from '@angular/core';
import { Document } from '../document/document';
import { BackendApiService } from '../backend-api.service'; 


@Component({
  selector: 'app-popup-fileversions',
  templateUrl: './popup-fileversions.component.html',
  styleUrl: './popup-fileversions.component.css'
})
export class PopupFileversionsComponent {


  show = false;

  constructor(private backendservice: BackendApiService) { }
  
  selectedVersion: any = null;

  currentVersion: any = null;


  
   documents: Document[] = [
    {
      id: 3,
      id_folder: 101,
      nombre: 'turtle.py',
      tipo_documento: 'dwg',
      fechacreada: new Date('2023-07-20'),
      version_id: 1.3,
      descripcion: 'Initial project plan',
      id_blob: '2024-04-07T18:52:46.1695391Z',
      fechamodificado: new Date('2023-09-03'),
    },
    {
      id: 2,
      id_folder: 101,
      nombre: 'turtle.py',
      tipo_documento: 'dwg',
      fechacreada: new Date('2023-07-20'),
      version_id: 1.2,
      descripcion: 'Initial project plan',
      id_blob: '2024-04-07T18:52:46.1695391Z',
      fechamodificado: new Date('2023-09-03'),
    },
    {
      id: 1,
      id_folder: 101,
      nombre: 'turtle.py',
      tipo_documento: 'dwg',
      fechacreada: new Date('2023-09-03'),
      version_id: 1.1,
      descripcion: 'Revised project plan after feedback',
      id_blob: '2024-04-07T18:09:24.9447066Z',
      fechamodificado: new Date('2023-09-03'),
    }
  ];
  // Method to show the popup
  openPopup() {
    
    console.log("opened");
    this.show = true;
  }

  // Method to close the popup
  closePopup() {
    console.log("close");
    this.show = false;
  }


  private getMimeType(filename: string): string {
    const extension = filename.split('.').pop();
    const mimeTypes: { [key: string]: string } = {
      'csv': 'text/csv',
      'pdf': 'application/pdf',
      'txt': 'text/plain',
      'jpeg': 'image/jpeg',
      'jpg': 'image/jpeg',
      'gif': 'image/gif',
      'png': 'image/png',
      'doc': 'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'xls': 'application/vnd.ms-excel',
      'json': 'application/json',
      'dwg': 'image/vnd.dwg',
      'dxf': 'image/vnd.dxf',
      'stl': 'application/vnd.ms-pki.stl',
      'ppt' : 'application/vnd.ms-powerpoint',
      'mp4' : 'audio/mp4',
      'mp3' : 'audio/mpeg'
      // Add other file types and MIME types as needed
    };
  
    return mimeTypes[extension.toLowerCase()] || 'application/octet-stream';
  }

  downloadCurrentVersion(){

      this.currentVersion = this.documents[0];
      console.log('Downloading version', this.currentVersion);

      
      
      this.backendservice.downloadFile(this.currentVersion.nombre, this.currentVersion.id_blob).subscribe(response =>
        {
          const mimeType = this.getMimeType(this.currentVersion.nombre);
  
          const contentDisposition = response.headers.get('Content-Disposition');
          console.log(mimeType)
          let filename = this.currentVersion.nombre;

          console.log(mimeType);
          // Create a URL for the blob
          const blob = new Blob([response.body], { type: mimeType });
          const blobUrl = window.URL.createObjectURL(blob);
          
          // Create an anchor (<a>) element with the URL as the href
          const anchor = document.createElement('a');
          document.body.appendChild(anchor); // This line is required for Firefox
          anchor.href = blobUrl;
          anchor.download = filename;
          anchor.click();
      
          // Cleanup: remove the anchor from the DOM
          document.body.removeChild(anchor);
      
          // Optional: free up the blob URL allocation
          window.URL.revokeObjectURL(blobUrl);
        }
  
        
  
      );

    
  }

  downloadSelectedVersion() {
    if (this.selectedVersion) {
      // Implement the logic to download the selected version
      console.log('Downloading version', this.selectedVersion);
      
      this.backendservice.downloadFile(this.selectedVersion.nombre, this.selectedVersion.id_blob).subscribe(response =>
        {
          const mimeType = this.getMimeType(this.selectedVersion.nombre);
  
          const contentDisposition = response.headers.get('Content-Disposition');
          console.log(mimeType)
          let filename = this.selectedVersion.nombre;

          console.log(mimeType);
          // Create a URL for the blob
          const blob = new Blob([response.body], { type: mimeType });
          const blobUrl = window.URL.createObjectURL(blob);
          
          // Create an anchor (<a>) element with the URL as the href
          const anchor = document.createElement('a');
          document.body.appendChild(anchor); // This line is required for Firefox
          anchor.href = blobUrl;
          anchor.download = filename;
          anchor.click();
      
          // Cleanup: remove the anchor from the DOM
          document.body.removeChild(anchor);
      
          // Optional: free up the blob URL allocation
          window.URL.revokeObjectURL(blobUrl);
        }
  
        
  
      );

    } else {
      // Handle the case where no version has been selected before the button click
      console.log('No version selected');
    }
  }
}
