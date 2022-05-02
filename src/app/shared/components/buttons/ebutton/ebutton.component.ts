import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'e-button',
  templateUrl: './ebutton.component.html',
  styleUrls: ['./ebutton.component.scss'],
})
export class EbuttonComponent implements OnInit {
  @ViewChild('button') public button?: ElementRef;
  @Input() desc: string = '';
  @Input() enable: boolean = true;
  @Input() type: string = '';
  animTiemeout: any = '';

  constructor(private renderer2: Renderer2) { }
  ngOnInit(): void { }

  anim() {
    clearTimeout(this.animTiemeout);
    var btn = this.button!.nativeElement;
    this.renderer2.removeClass(btn, 'btn-active');
    setTimeout(() => {
      this.renderer2.addClass(btn, 'btn-active');
    }, 10);
    this.animTiemeout = setTimeout(() => {
      this.renderer2.removeClass(btn, 'btn-active');
    }, 1000);
  }
}