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
      description: 'Recommended 1',
      image: '../assets/folder_icon.png'
    },
    {
      title: 'Card 2',
      description: 'Recommended 2',
      image: '../assets/folder_icon.png'
    },
    {
      title: 'Card 3',
      description: 'Recommended 3',
      image: '../assets/folder_icon.png'
    }
  ];

  constructor() { }

}
