import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personas } from '../personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  public formGroup: FormGroup;
  
  // listPersona: Personas[] =[]

  get listPersona(): FormArray {
    return this.formGroup.get("listPersona") as FormArray;
  }
  constructor(public fb: FormBuilder, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      listPersona: this.fb.array([], Validators.required),
    });
   }

  ngOnInit(): void {
  }

    newPersona(): FormGroup{
      return this.fb.group({
        nombre: new FormControl('', [Validators.required]),
        apellidos: new FormControl('', [Validators.required]),
        id: new FormControl('', [Validators.required]),
        fechaNacimiento: new FormControl('', [Validators.required]),
      });
    }

    getAllClassnames(){

    }

    getClassnamebyId(id: number){
       
    }

    insertClassname(name: string){
      this.listPersona.push(this.newPersona());
      localStorage.setItem('personas', JSON.stringify(this.listPersona));
    }

    updateClassname(name: string, id:number){
      localStorage.setItem('personas', JSON.stringify(this.listPersona));

    }

    deleteClassname(id: number){
      this.listPersona.removeAt(id);
      localStorage.setItem('personas', JSON.stringify(this.listPersona));

    }

}
