import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcarouselComponent } from './ecarousel.component';


describe('EcarouselComponent', () => {
  let component: EcarouselComponent;
  let fixture: ComponentFixture<EcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
