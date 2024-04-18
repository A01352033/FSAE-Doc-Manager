import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  imageSrc: string = './assets/FSAE.png';

  isVehicleExpanded: boolean = false;
  isAdministrationExpanded: boolean = false;
  isSettingsExpanded: boolean = false;
  
  list = [
    {
      number: '1',
      name: 'Chasis',
      icon: 'fa-solid fa-house',
      route: '/chasis'
    },
    {
      number: '2',
      name: 'Suspension',
      icon: 'fa-solid fa-house',
      route: '/suspension'
    },
    {
      number: '3',
      name: 'Electronics',
      icon: 'fa-solid fa-house',
      route: '/electronics'
    },
    {
      number: '4',
      name: 'Powetrain',
      icon: 'fa-solid fa-house',
      route: '/powertrain'
    },
  ];
  list2 =[
    {
      number: '5',
      name: 'Marketing',
      icon: 'fa-solid fa-house',
      route: '/marketing'
    },
    {
      number: '6',
      name: 'Finance',
      icon: 'fa-solid fa-house',
      route: '/finance'
    }

    },
    {
      number: '7',
      name: 'Permissions',
      icon: 'fa-solid fa-house',
    },
    

  ];

  list3 = [
    {
      number: '8',
      name: 'Account',
      icon: 'fa-solid fa-house',
    },
    {
      number: '9',
      name: 'Language',
      icon: 'fa-solid fa-house',
    },
    {
      number: '10',
      name: 'Dark Mode',
      icon: 'fa-solid fa-house',
    },
   
  ];
  
constructor() {}

ngOnInit(): void {}
}
