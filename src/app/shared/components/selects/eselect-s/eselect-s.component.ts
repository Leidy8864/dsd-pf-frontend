import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'e-select-s',
  templateUrl: './eselect-s.component.html',
  styleUrls: ['./eselect-s.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EselectSComponent),
      multi: true,
    },
  ],
})
export class EselectSComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() display: string = '';
  @Input() default: string = '';
  @Input() key: string = '';
  @ViewChild('select') select!: ElementRef;

  value: string = '';
  isDisabled: boolean = false;

  onChange = (_: any) => { };
  onToutch = () => { };

  constructor() { }

  echange(): void {
    this.onToutch();
    this.onChange(this.value);
  }

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
