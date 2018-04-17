import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EmailsEditorComponent} from './emails-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EmailsEditorComponent
  ],
  exports: [
    EmailsEditorComponent
  ]
})
export class EmailsEditorModule {
}
