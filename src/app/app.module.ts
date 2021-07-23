import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { PersonasComponent } from './components/personas/personas.component';
import { EmpleadoPuestoComponent } from './components/empleado-puesto/empleado-puesto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PuestoComponent,
    PersonasComponent,
    EmpleadoPuestoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
