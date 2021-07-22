import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PuestosComponent } from './puestos/puestos.component';
import { EmpleadosPuestosComponent } from './empleados-puestos/empleados-puestos.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PuestosComponent,
    EmpleadosPuestosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
