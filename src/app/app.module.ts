import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {EmailsEditorModule} from '../components/emails-editor/emails-editor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmailsEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
