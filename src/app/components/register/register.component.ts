import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { User } from 'src/app/services/Users';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel: User = new User(undefined, undefined, undefined, undefined, undefined, undefined, 3, 0, undefined, undefined);

  constructor(
    private router: Router,
    private crudService: CrudService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
  }

  registerUser(): void{
    this.crudService.register(this.userModel).subscribe(resp => {      
      console.log(resp)
      if(resp.resultado == false){
        this.snackBar.open('Ups! Revisa las casillas!', undefined, {
          duration: 2000,        
        })
      }
      else{
        this.snackBar.open('Usuario Registrado con Éxito!', undefined, {
          duration: 2000,        
        })
        this.router.navigateByUrl('/signin');
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
