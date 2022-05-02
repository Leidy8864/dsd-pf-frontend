import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinputSComponent } from './einput-s.component';

describe('EinputSComponent', () => {
  let component: EinputSComponent;
  let fixture: ComponentFixture<EinputSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinputSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinputSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
