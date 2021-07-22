import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { PersonasComponent } from './components/personas/personas.component';
import { EmpleadoPuestoComponent } from './components/empleado-puesto/empleado-puesto.component';
@NgModule({
  declarations: [
    AppComponent,
    PuestoComponent,
    PersonasComponent,
    EmpleadoPuestoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
