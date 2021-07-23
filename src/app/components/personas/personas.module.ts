import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    
  ]
})
export class PersonasModule { }
