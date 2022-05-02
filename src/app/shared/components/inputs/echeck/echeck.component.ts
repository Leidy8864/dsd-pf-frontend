import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'echeck',
  templateUrl: './echeck.component.html',
  styleUrls: ['./echeck.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EcheckComponent),
      multi: true,
    },
  ],
})
export class EcheckComponent implements OnInit {
  //PROPERTIES
  @Input() desc: string = '';
  @Input() className: string = 'primary';
  @ViewChild('checkbox') checkbox!: ElementRef;
  value: string = '';
  
  //EVENTS
  @Output() echange = new EventEmitter();

  onChange: (_: any) => void = (_: any) => { };

  onTouched: () => void = () => { };

  constructor() { }

  check() {
    this.checkbox.nativeElement.click();
  }

  updateChanges(value?: any) {
    this.echange.emit(value);
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.updateChanges(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void { }
}
