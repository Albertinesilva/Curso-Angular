import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { Ex1Component } from './components/ex1/ex1.component';

// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ex2Component } from './components/ex2/ex2.component';
import { EmailValidatorDirective } from './components/ex2/directives/email-validator.directive';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './components/ex2/utils/custom-error-sstate-matcher';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,

    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // Angular material
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher,
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
