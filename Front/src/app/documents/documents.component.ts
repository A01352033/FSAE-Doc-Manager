import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit {
  folderId: string;
  folderName: string;
  dummyFiles = [
    { name: 'Model', type: '.dwg', icon: 'dwg-icon' },
    { name: 'Financials', type: '.xlsx', icon: 'xlsx-icon' },
    { name: 'Blueprint', type: '.pdf', icon: 'pdf-icon' },
    { name: 'Contract', type: '.docx', icon: 'doc-icon' },
    { name: 'Data', type: '.xlsx', icon: 'xlsx-icon' },
    { name: 'Design', type: '.pdf', icon: 'pdf-icon' }
  ];

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.folderId = params['id']; 
      this.folderName= params['name'];
    });
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '250px',
      // Puedes pasar datos al diálogo aquí si es necesario
      data: { folderId: this.folderId, folderName: this.folderName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Aquí puedes manejar la respuesta del diálogo
    });
  }
}