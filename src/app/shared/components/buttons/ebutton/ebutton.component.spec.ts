import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbuttonComponent } from './ebutton.component';

describe('EbuttonComponent', () => {
  let component: EbuttonComponent;
  let fixture: ComponentFixture<EbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
