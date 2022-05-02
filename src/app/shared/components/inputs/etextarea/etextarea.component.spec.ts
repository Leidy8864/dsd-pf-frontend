import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtextareaComponent } from './etextarea.component';

describe('EtextareaComponent', () => {
  let component: EtextareaComponent;
  let fixture: ComponentFixture<EtextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
