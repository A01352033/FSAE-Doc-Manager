import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-create',
  templateUrl: './popup-create.component.html',
  styleUrl: './popup-create.component.css'
})
export class PopupCreateComponent {

  show = false;

  openPopup() {
    console.log("opened");
    this.show = true;
  }

  // Method to close the popup
  closePopup() {
    console.log("close");
    this.show = false;
  }


}
