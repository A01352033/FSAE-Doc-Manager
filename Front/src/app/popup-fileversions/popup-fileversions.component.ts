import { Component,ViewChild } from '@angular/core';
import { Document } from '../document/document';

@Component({
  selector: 'app-popup-fileversions',
  templateUrl: './popup-fileversions.component.html',
  styleUrl: './popup-fileversions.component.css'
})
export class PopupFileversionsComponent {


  show = false;

  constructor() { }

  
   documents: Document[] = [
    {
      id: 1,
      id_folder: 101,
      nombre: 'ProjectPlan',
      tipo_documento: 'dwg',
      fechacreada: new Date('2023-07-20'),
      version_id: 1,
      descripcion: 'Initial project plan',
      id_blob: 'blob-id-1',
      fechamodificado: new Date('2023-09-03'),
    },
    {
      id: 2,
      id_folder: 101,
      nombre: 'ProjectPlanRevised',
      tipo_documento: 'dwg',
      fechacreada: new Date('2023-09-03'),
      version_id: 2,
      descripcion: 'Revised project plan after feedback',
      id_blob: 'blob-id-2',
      fechamodificado: new Date('2023-09-03'),
    },
    {
      id: 3,
      id_folder: 101,
      nombre: 'ProjectPlanFinal',
      tipo_documento: 'dwg',
      fechacreada: new Date('2024-01-04'),
      version_id: 3,
      descripcion: 'Final version of project plan',
      id_blob: 'blob-id-3',
      fechamodificado: new Date('2023-09-03'),
    },
    {
      id: 4,
      id_folder: 101,
      nombre: 'ProjectPlanFinalApproved',
      tipo_documento: 'dwg',
      fechacreada: new Date('2024-02-23'),
      version_id: 4,
      descripcion: 'Approved project plan',
      id_blob: 'blob-id-4',
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
}
