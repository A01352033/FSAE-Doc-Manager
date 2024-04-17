import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Update the path to the actual service path.


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() files: any; // Define the type according to the data structure you're passing

  data: Document[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("init");
    this.apiService.getRecentDocuments().subscribe({
      next: (response: any[]) => {if (response && response['items']) {
        this.data = response['items'].map((item: any) => ({
          id: item.id,
          nombre: item.nombre,
          fechacreada: new Date(item.fechacreada)
        }));
      }},
      error: (err) => console.error("err", err),
    });
    console.log("docs", this.data);

  }
}
