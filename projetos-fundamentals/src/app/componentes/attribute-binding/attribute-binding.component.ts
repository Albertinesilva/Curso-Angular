import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent {

  buttonTitle = 'Titulo do botão'
  buttonDesabled = false;

  onButtonClick(){
    this.buttonTitle = "Titulo ALTERADOOOOOOOO";
    this.buttonDesabled = !this.buttonDesabled;
  }
}