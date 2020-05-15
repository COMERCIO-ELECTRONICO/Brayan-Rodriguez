import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // modulo de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }