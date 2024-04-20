import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  recentFiles: any;
  isLanding: boolean = false;
  isLogin: boolean = false;
  isRegister: boolean = false;
  isNothing: boolean = false;

  constructor(private router: Router) {
    this.recentFiles = [
      { name: 'File 1', date: '01/01/2021' },
      { name: 'File 2', date: '01/02/2021' },
      { name: 'File 3', date: '01/03/2021' }
    ];

    // Update the state based on the initial URL
    this.updateRouteState(this.router.url);

    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteState(event.url);
      }
    });
  }

  updateRouteState(url: string) {
    this.isNothing = url === '';
    this.isLanding = url === '/landing';
    this.isLogin = url === '/login';
    this.isRegister = url === '/register';
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
