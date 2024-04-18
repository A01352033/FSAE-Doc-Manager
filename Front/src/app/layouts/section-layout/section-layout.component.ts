// section-layout.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.css']
})
export class SectionLayoutComponent implements OnInit {
  showRecientes: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Escuchar los eventos del router para determinar cuándo mostrar la sección "Recientes"
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtrar solo los eventos de NavigationEnd
    ).subscribe((event: NavigationEnd) => {
      // La sección "Recientes" solo se muestra en la ruta principal, no en las rutas de documentos
      this.showRecientes = !event.urlAfterRedirects.includes('/documents/');
    });
  }
}
