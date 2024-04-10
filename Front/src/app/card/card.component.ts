import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() files: any; // Define the type according to the data structure you're passing

  constructor() { }

  ngOnInit(): void {
  }
}
