import {Component, Input, OnInit} from '@angular/core';
import {DefaultEmailValidator} from './default-email-validator';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {

  private _emails: String[] = [];

  @Input()
  public validate: (email: string) => boolean = new DefaultEmailValidator().validate;

  constructor() {
  }

  ngOnInit() {
  }

  get emails() {
    return this._emails;
  }

  @Input()
  set emails(emails: String[]) {
    this._emails = emails;
  }

  deleteItem(i: number) {
    this.emails.splice(i, 1);
  }

  onEmailComplete(value: string) {
    if (!value.length) {
      return;
    }
    this.addEmail(value);
  }

  onEmailPaste(value: string, event: any) {
    const pastedValue: string = (value || '') + event.clipboardData.getData('Text');
    if (this.validate(pastedValue)) {
      this.addEmail(pastedValue);
      event.preventDefault();
    }
  }

  private addEmail(email: string) {
    const found = this.emails.find(e => e === email);
    if (!found) {
      this.emails.push(email);
    }
  }

  removeLast(value: string) {
    if ((!value || value === '') && this.emails.length) {
      this.emails.pop();
    }
  }
}
