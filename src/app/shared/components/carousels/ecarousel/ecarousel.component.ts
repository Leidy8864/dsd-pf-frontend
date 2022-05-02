import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ecarousel',
  templateUrl: './ecarousel.component.html',
  styleUrls: ['./ecarousel.component.scss']
})
export class EcarouselComponent implements OnInit {
  data: string[] = [];
  items: Element[]=[];
  indexElement: number = 0;
  animationInterval: any = '';
  attr: { cx: string, cy: string, r: string } = { cy: '1.1rem', cx: '1.1rem', r: '1rem' };

  constructor(private elementRef: ElementRef) {
    this.data = [
      'https://picsum.photos/1000/500',
      'https://picsum.photos/1000/501',
      'https://picsum.photos/1000/502',
      'https://picsum.photos/1000/503',
      'https://picsum.photos/1000/504',
      'https://picsum.photos/1000/505',
      'https://picsum.photos/1000/506',
    ];
  }

  ngOnInit(): void { 
    // this.mediaQuery();
  }

  animation() {
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(() => {
      this.setLocation(++this.indexElement);
    }, 10000);
  }

  setLocation(index: number = 0) {
      this.indexElement = index >= this.items.length ? 0 : (index < 0 ? this.items.length - 1 : index);
      for (let i = 0; i < this.items.length; i++)
        (<HTMLElement>this.items[i]).style.left = `${(100 * (i - this.indexElement))}%`;
      this.animation();
  }


 
  ngAfterViewInit() {
    this.items = Array.from((<HTMLElement>this.elementRef.nativeElement).getElementsByClassName('carousel-item'));
    this.setLocation();
  }
}



