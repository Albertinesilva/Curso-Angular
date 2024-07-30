import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'Fulano';

  onchange(text: string){
    console.log(text);
  }

  onClick(){
    console.log(this.nome);
  }
}
