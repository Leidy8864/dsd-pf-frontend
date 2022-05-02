import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtextEditorComponent } from './etext-editor.component';

describe('EtextEditorComponent', () => {
  let component: EtextEditorComponent;
  let fixture: ComponentFixture<EtextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtextEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
