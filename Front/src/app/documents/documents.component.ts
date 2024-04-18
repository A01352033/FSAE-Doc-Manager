import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit {
  folderId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.folderId = params['id']; // Asegúrate de que 'id' es el parámetro configurado en tu ruta
      // Aquí cargarías los documentos relacionados con el folderId
    });
  }
}
