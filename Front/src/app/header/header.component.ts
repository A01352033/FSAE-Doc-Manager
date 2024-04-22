import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
cards: any = [
    {
      title: 'Card 1',
      description: 'Model1.dwg',
      image: '../assets/dwg-icon.png'
    },
    {
      title: 'Card 2',
      description: 'Model2.dwg',
      image: '../assets/dwg-icon.png'
    },
    {
      title: 'Card 3',
      description: 'Model3.dwg',
      image: '../assets/dwg-icon.png'
    }
  ];

  constructor() { }

}
