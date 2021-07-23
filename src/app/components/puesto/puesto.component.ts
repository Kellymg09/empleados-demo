import { Component, OnInit } from '@angular/core';
import { Puesto } from '../puesto';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {
  puestos:any;
  search: number;
  flag:boolean;
  listPuesto: Puesto[] =[]
  searchPerson: Puesto;
  edit= false;
  selectedPuesto: Puesto = new Puesto();
  constructor() {
    this.getAllPuestos();
   }

  ngOnInit(): void {
  }

  submit(){
  }

  addPuesto(){
    console.log("selec", this.selectedPuesto)
    if(this.edit === false){
      this.selectedPuesto.id = this.listPuesto.length + 1;
      this.listPuesto.push(this.selectedPuesto);
    }else{
      this.listPuesto[this.selectedPuesto.id - 1]=this.selectedPuesto;
      this.edit = false;
    }    
    this.selectedPuesto = new Puesto;
    localStorage.setItem('puesto', JSON.stringify(this.listPuesto));

  }

  getAllPuestos(){
    this.puestos=JSON.parse(localStorage.getItem('puesto'));
    console.log("this.puestos ", this.puestos)
  }

  updatedPuesto(puesto: Puesto){
    console.log("puesto ", puesto);
    this.selectedPuesto=puesto; 
    this.edit=true;
  }

  getPuestobyId(){
    this.flag=true;
    console.log("search", this.search);
    for(var i=0; i<this.listPuesto.length; i++){
      if(i == this.search-1 && this.search>0){
        this.searchPerson = this.listPuesto[i];
      }else{
        this.searchPerson.nombre = "No existe";
      }
    }
  }

  deletedPuesto(puesto: Puesto){
    console.log("puesto ", puesto);
    // this.listPuesto = this.listPuesto.filter(x => x != puesto);
    this.selectedPuesto = new Puesto;
    for(var i=0; i<this.listPuesto.length; i++){
      if(i == puesto.id-1){
        delete this.listPuesto[i];
      }
    }
    this.listPuesto = this.listPuesto.filter(Boolean);
    console.log("lista puesto ", this.listPuesto);
    localStorage.setItem('puesto', JSON.stringify(this.listPuesto));
    
    this.getAllPuestos();
  }

  clearVar(){
    this.flag=false;
    
  }

}
