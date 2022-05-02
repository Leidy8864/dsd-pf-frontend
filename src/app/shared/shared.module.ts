import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EinputComponent } from './components/inputs/einput/einput.component';
import { EselectComponent } from './components/selects/eselect/eselect.component';
import { EbuttonComponent } from './components/buttons/ebutton/ebutton.component';
import { EcarouselComponent } from './components/carousels/ecarousel/ecarousel.component';
import { EinputSComponent } from './components/inputs/einput-s/einput-s.component';
import { EselectSComponent } from './components/selects/eselect-s/eselect-s.component';
import { EcheckComponent } from './components/inputs/echeck/echeck.component';
import { FormsModule } from '@angular/forms';
import { EtextEditorComponent } from './components/inputs/etext-editor/etext-editor.component';
import { EpaginationComponent } from './components/paginations/epagination/epagination.component';
import { EtextareaComponent } from './components/inputs/etextarea/etextarea.component';



@NgModule({
  declarations: [
    EinputComponent,
    EselectComponent,
    EbuttonComponent,
    EcarouselComponent,
    EinputSComponent,
    EselectSComponent,
    EcheckComponent,
    EtextEditorComponent,
    EpaginationComponent,
    EtextareaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EinputComponent,
    EselectComponent,
    EbuttonComponent,
    EcarouselComponent,
    EinputSComponent,
    EselectSComponent,
    EcheckComponent,
    EtextEditorComponent,
    EpaginationComponent,
    EtextareaComponent
  ]
})
export class SharedModule { }
