import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent {

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

   update():any{
     this.crudService.updateUser(this.formularioRegistro.value);
   }

}
