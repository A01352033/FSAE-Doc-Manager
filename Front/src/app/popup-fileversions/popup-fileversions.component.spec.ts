import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFileversionsComponent } from './popup-fileversions.component';

describe('PopupFileversionsComponent', () => {
  let component: PopupFileversionsComponent;
  let fixture: ComponentFixture<PopupFileversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupFileversionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupFileversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
