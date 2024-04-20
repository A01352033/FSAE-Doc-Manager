import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chasis',
  templateUrl: './chasis.component.html',
  styleUrl: './chasis.component.css'
})
export class ChasisComponent implements OnInit{
  folders: any[] = [
    { id: '1', name: 'Diseños', updated: '2022-09-01' },
    { id: '2', name: 'Presupuestos', updated: '2022-08-15' },
    { id: '3', name: 'Reportes', updated: '2022-07-20' }
  ];

  constructor() { }

  ngOnInit() {
  }
}