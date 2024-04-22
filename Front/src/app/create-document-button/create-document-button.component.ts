import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-create-document-button',
  templateUrl: './create-document-button.component.html',
  styleUrl: './create-document-button.component.css'
})
export class CreateDocumentButtonComponent {
  @Output() onFabClick = new EventEmitter();

  togglePopup(): void {
    this.onFabClick.emit();
  }
}
