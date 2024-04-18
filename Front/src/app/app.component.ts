import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/* Now we add the routes */
export class AppComponent {
  title = 'Front';
  recentFiles: any;
  constructor(private router: Router) {
    this.recentFiles = [
      {
        name: 'File 1',
        date: '01/01/2021'
      },
      {
        name: 'File 2',
        date: '01/02/2021'
      },
      {
        name: 'File 3',
        date: '01/03/2021'
      }
    ];
  }
  goTo(route: string) {
    this.router.navigate([route]);
  }
}

