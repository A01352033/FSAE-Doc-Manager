import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.css'
})
export class UploadDialogComponent {
  file: File;

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    // Aquí manejarías la carga del archivo a tu backend
    console.log(this.file);
    // Cerrar el diálogo después de subir el archivo
    // Si usas MatDialogRef, puedes llamar a this.dialogRef.close();
  }

  onCancel() {
    // Cerrar diálogo o lógica adicional
  }
}
