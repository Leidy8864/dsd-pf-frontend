import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'einput-s',
  templateUrl: './einput-s.component.html',
  styleUrls: ['./einput-s.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EinputSComponent),
      multi: true,
    },
  ],
})
export class EinputSComponent implements OnInit {

 //PROPERTIES
 @Input() type: string = 'text';
 @Input() placeholder: string = '';

 //EVENTS
 @Output() ekeypress = new EventEmitter<KeyboardEvent>();
 @Output() ekeyup = new EventEmitter<KeyboardEvent>();
 @Output() echange = new EventEmitter();

 animinterval: any;
 value: string = '';

 isNumber = false;

 get getType() {
   if (this.type == 'number' || this.type == 'decimal') {
     this.isNumber = true;
     return 'text';
   }
   return this.type;
 }

 keyUpEvent(event: KeyboardEvent) {
   this.ekeyup.emit(event);
 }

 keyPressEvent(event: KeyboardEvent) {
   if (this.isNumber && !this.numberValidation(event.key))
     event.preventDefault();
 }

 pasteEvent(event: ClipboardEvent) {
   if (
     this.isNumber &&
     !this.numberValidation(event.clipboardData!.getData('text'))
   )
     event.preventDefault();
 }

 numberValidation(text: string): boolean {
   if (text == '') return false;

   switch (this.type.toLowerCase()) {
     case 'number':
       if (!/^\d*$/.test(text)) return false;
       break;
     case 'decimal':
       if (!/^\d*$/.test(text)) return false;
       break;
   }
   return true;
 }

 onChange: (_: any) => void = (_: any) => {};

 onTouched: () => void = () => {};

 constructor() {}

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

 ngOnInit(): void {}
}
