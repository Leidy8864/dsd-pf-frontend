import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpaginationComponent } from './epagination.component';

describe('EpaginationComponent', () => {
  let component: EpaginationComponent;
  let fixture: ComponentFixture<EpaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
