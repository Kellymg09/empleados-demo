import { Component } from '@angular/core';
import { Personas } from '../app/components/personas';
import { Puesto } from '../app/components/puesto';
import { EmpleadoPuesto } from '../app/components/empleado-puesto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value='';
  title = 'empleados-demo';



        //   nombre: new FormControl('', [Validators.required]),
        // apellidos: new FormControl('', [Validators.required]),
        // id: new FormControl('', [Validators.required]),
        // fechaNacimiento: new FormControl('', [Validators.required]),
}
