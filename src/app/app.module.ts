import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CarrerasComponent } from './componentes/carreras/carreras.component';


@NgModule({
  declarations: [
    FormularioComponent,
    CarrerasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormularioComponent,CarrerasComponent]
})
export class AppModule { }
