import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  types: Type[] = [
    {value: 'estudiante', viewValue: 'Estudiante'},
    {value: 'profesor', viewValue: 'Profesor'},
    {value: 'operativo', viewValue: 'Operativo'},
    {value: 'admin', viewValue: 'Administrador'}
  ];

  constructor(private router:Router) { }
  
  login(): any{
    this.router.navigateByUrl('/student');
  }

  goRegister(): any{
    this.router.navigateByUrl('/register');
  }

  goLogin(): any{
    this.router.navigateByUrl('/signin');
  }
}
