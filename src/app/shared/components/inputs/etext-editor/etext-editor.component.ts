import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'etext-editor',
  templateUrl: './etext-editor.component.html',
  styleUrls: ['./etext-editor.component.scss']
})
export class EtextEditorComponent implements OnInit {
  @ViewChild('eeditor') eeditor!: ElementRef;

  option:string='hola';

  @Input() desc: string = 'Descripcion';
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  action() {
    var parent: HTMLElement;
    parent = (<HTMLElement>(<any>window.getSelection()).baseNode.parentElement);
    const eeditor = parent.closest('div.editor-area');
    var text = (<string>this.eeditor.nativeElement.innerHTML);

    if (!parent.closest('div.editor-area') || !window.getSelection())
      return;

    console.log((<any>window.getSelection()?.getRangeAt(0)));

    var div = document.createElement("div");
    div.appendChild(<any>window.getSelection()?.getRangeAt(0).cloneContents());


    console.log(div.innerHTML);
    console.log(text);
    // div.appendChild(window.getSelection()!.getRangeAt(0).extractContents());
    (<HTMLDivElement>this.eeditor.nativeElement).innerHTML = text.replace(div.innerHTML, '<b>' + div.innerHTML + '</b>');


    return window.getSelection()?.anchorNode;
  }
}
