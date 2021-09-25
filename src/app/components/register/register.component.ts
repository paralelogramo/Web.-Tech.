import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formularioRegistro:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService
    ) {
    this.formularioRegistro = this.formulario.group({
      nickname:[''],
      email:[''],
      password:['']
    });
   }


  register():any{
    var a = this.crudService.registerUser(this.formularioRegistro.value).subscribe();
    this.formularioRegistro.reset();
  }

}
