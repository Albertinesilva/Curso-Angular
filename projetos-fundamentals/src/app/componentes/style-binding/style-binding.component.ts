import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {

  widthButton1 = '110px';
  widthButton2 = 130;
  stylesObj = {
    width: '160px',
    backgroundColor: 'gray',
  }

  updateStyleObj() {
    console.log('updateStyleObj()');

    this.stylesObj.width = '200px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStyleObjCorret() {
    console.log('updateStyleObjCorret()');
    this.stylesObj = {
      width: '200px',
      backgroundColor: 'lightblue'
    }
  }

  updateWidth() {
    this.widthButton2 = 200;
  }

}
