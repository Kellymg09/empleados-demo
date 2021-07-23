import { Component, OnInit } from '@angular/core';
import { EmpleadoPuesto } from '../empleado-puesto';
import { Personas } from '../personas';
import { Puesto } from '../puesto';

@Component({
  selector: 'app-empleado-puesto',
  templateUrl: './empleado-puesto.component.html',
  styleUrls: ['./empleado-puesto.component.scss']
})
export class EmpleadoPuestoComponent implements OnInit{

  empleadoPuesto:any;
  search: number;
  puestos:Puesto;
  personas:Personas;
  flag:boolean;
  listEmpleadoPuesto: EmpleadoPuesto[] =[]
  searchEmpleadoPuesto: EmpleadoPuesto;
  edit= false;
  selectedEmpleadoPuesto: EmpleadoPuesto = new EmpleadoPuesto();
  constructor() {
    this.getAllEmpleadoPuesto();
    this.getAllPuestos();
    this.getAllPersonas();
   }

  ngOnInit(): void {
  }

  submit(){
  }

  addEmpleadoPuesto(){
    console.log("selecteeeeeeeeeeeeed", this.selectedEmpleadoPuesto)
    if(this.edit === false){
      this.selectedEmpleadoPuesto.id = this.listEmpleadoPuesto.length + 1;
      this.listEmpleadoPuesto.push(this.selectedEmpleadoPuesto);
      console.log("selecteeeeeeeeeeeeed 333333333333", this.listEmpleadoPuesto)

    }else{
      this.listEmpleadoPuesto[this.selectedEmpleadoPuesto.id - 1]=this.selectedEmpleadoPuesto;
      this.edit = false;
    }    
    this.selectedEmpleadoPuesto = new EmpleadoPuesto;
    localStorage.setItem('empleadoPuesto', JSON.stringify(this.listEmpleadoPuesto));

  }

  getAllEmpleadoPuesto(){
    this.empleadoPuesto=JSON.parse(localStorage.getItem('empleadoPuesto')); 
    console.log("this.empleadoPuesto ", this.empleadoPuesto.persona)
  }

  updateEmpleadoPuesto(empleadoPuesto: EmpleadoPuesto){
    console.log("empleadoPuesto ", empleadoPuesto);
    this.selectedEmpleadoPuesto.persona.nombre=empleadoPuesto.persona.nombre; 

    this.selectedEmpleadoPuesto.puesto.nombre=empleadoPuesto.puesto.nombre; 
    this.edit=true;
  }

  getEmpleadoPuestobyId(){
    this.flag=true;
    console.log("search", this.search);
    for(var i=0; i<this.listEmpleadoPuesto.length; i++){
      if(i == this.search-1 && this.search>0){
        this.searchEmpleadoPuesto = this.listEmpleadoPuesto[i];
      }else{
        this.searchEmpleadoPuesto.persona.nombre = "No existe";
      }
    }
  }

  deleteEmpleadoPuesto(empleadoPuesto: EmpleadoPuesto){
    console.log("empleadoPuesto ", empleadoPuesto);
    // this.listEmpleadoPuesto = this.listEmpleadoPuesto.filter(x => x != empleadoPuesto);
    this.selectedEmpleadoPuesto = new EmpleadoPuesto;
    for(var i=0; i<this.listEmpleadoPuesto.length; i++){
      if(i == empleadoPuesto.id-1){
        delete this.listEmpleadoPuesto[i];
      }
    }
    this.listEmpleadoPuesto = this.listEmpleadoPuesto.filter(Boolean);
    console.log("lista empleadoPuesto ", this.listEmpleadoPuesto);
    localStorage.setItem('empleadoPuesto', JSON.stringify(this.listEmpleadoPuesto));
    
    this.getAllEmpleadoPuesto();
  }

  clearVar(){
    this.flag=false;
    
  }

  getAllPuestos(){
    this.puestos=JSON.parse(localStorage.getItem('puesto'));
    console.log("this.puestos ", this.puestos)
  }

  getAllPersonas(){
    this.personas=JSON.parse(localStorage.getItem('persona'));
    console.log("this.personas ", this.personas)
  }
}
