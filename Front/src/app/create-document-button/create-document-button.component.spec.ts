import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDocumentButtonComponent } from './create-document-button.component';

describe('CreateDocumentButtonComponent', () => {
  let component: CreateDocumentButtonComponent;
  let fixture: ComponentFixture<CreateDocumentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDocumentButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDocumentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
