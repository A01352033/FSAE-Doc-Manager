import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  list = [
    {
      number: '1',
      name: 'Chasis',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Suspension',
      icon: 'fa-solid fa-house',
    },
    {
      number: '3',
      name: 'Electronics',
      icon: 'fa-solid fa-house',
    },
    {
      number: '4',
      name: 'Powetrain',
      icon: 'fa-solid fa-house',
    },
  ];
  list2 =[
    {
      number: '5',
      name: 'Marketing',
      icon: 'fa-solid fa-house',
    },
    {
      number: '6',
      name: 'Finance',
      icon: 'fa-solid fa-house',
    },
    {
      number: '7',
      name: 'Projects',
      icon: 'fa-solid fa-house',
    },
    {
      number: '8',
      name: 'Users',
      icon: 'fa-solid fa-house',
    },

  ];
constructor() {}

ngOnInit(): void {}
}
