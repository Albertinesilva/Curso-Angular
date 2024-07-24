import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  inputText = "Texto Inicial alterado";
  inputType = "text"
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = "password";
  }

  setTextTypeInput() {
    this.inputType = "text";
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEnvet(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }
}
