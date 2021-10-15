import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CrudService } from '../../services/crud.service';
import { User } from 'src/app/services/Users';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  email: String = "";
  pass: String = "";

  aux: User = new User(undefined,"",undefined,"","","",undefined,undefined);

  types: Type[] = [
    {value: 'estudiante', viewValue: 'Estudiante'},
    {value: 'profesor', viewValue: 'Profesor'},
    {value: 'operativo', viewValue: 'Operativo'},
    {value: 'admin', viewValue: 'Administrador'}
  ];

  constructor(
    private router:Router,
    private crudService: CrudService,
    private snackBar: MatSnackBar
    ) { }
  
  login(): any{
    this.crudService.getUser(this.email, this.pass).subscribe((user: User )=> {
      if (user.email===this.email && user.pass===this.pass){
        this.snackBar.open('¡Bienvenid@ '+user.nick+'!', undefined, {
          duration: 2000,        
        })
        this.router.navigateByUrl('/student');
      }
      else{
        this.snackBar.open('¡Revisa el correo o la contraseña!', undefined, {
          duration: 2000,        
        })
      }
    });
  }

  goRegister(): any{
    this.router.navigateByUrl('/register');
  }

  goLogin(): any{
    this.router.navigateByUrl('/signin');
  }
}
