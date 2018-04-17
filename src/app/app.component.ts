import {Component} from '@angular/core';
import {EmailRandomGenerator} from './email-random-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rtb-angular5-tw1';
  emailList: string[] = ['sidorov@mail.ru', 'abc@mail.ru'];
  emailGenerator = new EmailRandomGenerator();

  addEmail(email: string) {
    this.emailList.push(email);
  }

  addRandomEmail() {
    this.addEmail(this.emailGenerator.getMail());
  }

  showCountAlert() {
    const count = this.emailList.length;
    alert(`email count is ${count}`);
  }
}
