import {
  Component,
  forwardRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'e-select',
  templateUrl: './eselect.component.html',
  styleUrls: ['./eselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EselectComponent),
      multi: true,
    },
  ],
})
export class EselectComponent implements OnInit, ControlValueAccessor {
  @Input() desc: string = '';
  @Input() data: any[] = [];
  @Input() display: string = '';
  @Input() key: string = '';
  @Input() default: string | number = '';

  value: string = '';


  isDisabled: boolean = false;

  onChange = (_: any) => { };
  onToutch = () => { };

  constructor() { }

  echange(): void {
    this.onToutch();
    this.onChange(this.value);
  }

  // @HostListener('click', ['$event.target'])
  // onClick(event: Event) {
  //   console.log(event);
  // }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onToutch = fn;
  }

  setDisabledState(state: boolean): void {
    this.isDisabled = state;
  }

  ngOnInit(): void { }
}
