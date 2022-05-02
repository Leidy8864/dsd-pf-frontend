import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EselectSComponent } from './eselect-s.component';

describe('EselectSComponent', () => {
  let component: EselectSComponent;
  let fixture: ComponentFixture<EselectSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EselectSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EselectSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
