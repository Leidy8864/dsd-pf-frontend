import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EselectComponent } from './eselect.component';

describe('EselectComponent', () => {
  let component: EselectComponent;
  let fixture: ComponentFixture<EselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
