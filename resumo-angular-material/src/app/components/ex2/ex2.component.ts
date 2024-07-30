import { Component } from '@angular/core';
import { CustomErrorStateMatcher } from './utils/custom-error-sstate-matcher';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.css',
  // providers: [
  //   {
  //     provide: ErrorStateMatcher,
  //     useClass: CustomErrorStateMatcher,
  //   }
  // ]
})
export class Ex2Component {
  matcher = new CustomErrorStateMatcher();
}
