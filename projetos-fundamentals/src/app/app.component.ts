import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projetos-fundamentals';
  inputText = "Texto Inicial alterado";
  inputType = "text"
  isDisabled = false;

  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  } 

  setPasswordTypeInput(){
    this.inputType = "password";
  }

  setTextTypeInput(){
    this.inputType = "text";
  }

  logInputText(){
    console.log(this.inputText);
  }

  handleInputKeup(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value;  
    console.log(currentText);
  }

  handleInputEnvet(event: Event){
    const currentText = (event.target as HTMLInputElement).value; 
    console.log(currentText);
  }
}
