import { Component } from '@angular/core';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.css'
})
export class UploadDialogComponent {
  file: File;
  nombre : string = 'screenshot';

  constructor(
    private fileuploadService: BackendApiService
    ) {}  

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    // Aquí manejarías la carga del archivo a tu backend
    console.log(this.file);
    console.log(this.nombre);

    return this.fileuploadService.uploadFile(this.file, this.file.name).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });

    

    // Cerrar el diálogo después de subir el archivo
    // Si usas MatDialogRef, puedes llamar a this.dialogRef.close();
  }

  onCancel() {
    // Cerrar diálogo o lógica adicional
  }
}
