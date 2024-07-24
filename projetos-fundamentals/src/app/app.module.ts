import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBindingComponent } from './componentes/attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { StyleBindingComponent } from './componentes/style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
