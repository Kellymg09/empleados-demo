import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personas } from '../personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas:any;
  search: number;
  flag:boolean;
  listPersona: Personas[] =[]
  searchPerson: Personas;
  edit= false;
  selectedPersona: Personas = new Personas();
  constructor() {
    this.getAllPersonas();
   }

  ngOnInit(): void {
  }

  submit(){
  }

  addPersona(){
    console.log("selec", this.selectedPersona)
    if(this.edit === false){
      this.selectedPersona.id = this.listPersona.length + 1;
      this.listPersona.push(this.selectedPersona);
    }else{
      this.listPersona[this.selectedPersona.id - 1]=this.selectedPersona;
      this.edit = false;
    }    
    this.selectedPersona = new Personas;
    localStorage.setItem('persona', JSON.stringify(this.listPersona));

  }

  getAllPersonas(){
    this.personas=JSON.parse(localStorage.getItem('persona'));
    console.log("this.personas ", this.personas)
  }

  updatePersona(persona: Personas){
    console.log("persona ", persona);
    this.selectedPersona=persona; 
    this.edit=true;
  }

  getPersonabyId(){
    this.flag=true;
    console.log("search", this.search);
    for(var i=0; i<this.listPersona.length; i++){
      if(i == this.search-1 && this.search>0){
        this.searchPerson = this.listPersona[i];
      }else{
        this.searchPerson.nombre = "No existe";
      }
    }
  }

  deletePersona(persona: Personas){
    console.log("persona ", persona);
    // this.listPersona = this.listPersona.filter(x => x != persona);
    this.selectedPersona = new Personas;
    for(var i=0; i<this.listPersona.length; i++){
      if(i == persona.id-1){
        delete this.listPersona[i];
      }
    }
    this.listPersona = this.listPersona.filter(Boolean);
    console.log("lista persona ", this.listPersona);
    localStorage.setItem('persona', JSON.stringify(this.listPersona));
    
    this.getAllPersonas();
  }

  clearVar(){
    this.flag=false;
    
  }

    // newPersona(): FormGroup{
    //   return this.fb.group({
    //     nombre: new FormControl('', [Validators.required]),
    //     apellidos: new FormControl('', [Validators.required]),
    //     id: new FormControl('', [Validators.required]),
    //     fechaNacimiento: new FormControl('', [Validators.required]),
    //   });
    // }

    // getAllClassnames(){

    // }

    // getClassnamebyId(id: number){
       
    // }

    // insertClassname(name: string){
    //   this.listPersona.push(this.newPersona());
    //   localStorage.setItem('personas', JSON.stringify(this.listPersona));
    // }

    // updateClassname(name: string, id:number){
    //   localStorage.setItem('personas', JSON.stringify(this.listPersona));

    // }

    // deleteClassname(id: number){
    //   this.listPersona.removeAt(id);
    //   localStorage.setItem('personas', JSON.stringify(this.listPersona));

    // }

}
