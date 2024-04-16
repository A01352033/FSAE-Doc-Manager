import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './apii.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataList: any[] = [];
  loading = false;
  title = 'Front';
  constructor(private apiService: ApiService) {}

  fetchData() {
    this.loading = true;
    this.apiService.getData().subscribe(
      data => {
      console.log(data);
    },
    error => {
      console.log(error);
  }
  );
  }
recentFiles: any;
}
