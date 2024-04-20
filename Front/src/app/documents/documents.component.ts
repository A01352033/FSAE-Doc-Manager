import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.folderId = params['id']; 
      this.folderName= params['name'];
    });
  }
}