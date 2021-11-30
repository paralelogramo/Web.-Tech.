import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { User } from 'src/app/services/Users';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Career {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel: User = new User(undefined, undefined, undefined, undefined, undefined, undefined, 3, "Agronomia", 0, undefined, undefined);

  careers: string[] = [
    'Agronomia',
    'Administracion Publica',
    'Arquitectura',
    'Auditoria e Ingenieria en Control de Gestion',
    'Bioquimica',
    'Contador Publico y Auditor',
    'Derecho',
    'Diseño',
    'Enfermeria',
    'Fonoaudiologia',
    'Ingenieria Civil en Minas',
    'Ingenieria Civil Electrica',
    'Ingenieria Civil en Bioinformatica',
    'Ingenieria Civil en Computacion',
    'Ingenieria Civil en Obras Civiles',
    'Ingenieria Civil Industrial',
    'Ingenieria Civil Mecanica',
    'Ingenieria Civil Mecatronica',
    'Ingenieria Comercial',
    'Ingenieria en Desarrollo de Videojuegos y RV',
    'Ingenieria Informatica Empresarial',
    'Kinesiologia',
    'Licenciatura en Inter. y Form. Mus. Esp.',
    'Medicina',
    'Nutricion y Dietetica',
    'Obstetricia y Puericultira',
    'Odontologia',
    'Pedagogia de Edu. Media en Ingles',
    'Ped. en Edu. Gral. Basica con Mencion en Aleman',
    'Ped. en Edu. Gral. Basica con Mencion en Ingles',
    'Ped. en Edu. Media en Aleman',
    'Ped. en Edu. Media en Bio. y Qui.',
    'Ped. en Edu. Media en Mat. y Fis.',
    'Ped. en Edu. Parv. con Mencion en Aleman',
    'Ped. en Edu. Parv. con Mencion en Ingles',
    'Psicologia',
    'Tecnologia Medica',
    'Terapia Ocupacional'
  ]

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
          duration: 3000,
        })
      }
      else{
        this.snackBar.open('Usuario Registrado con exito!', undefined, {
          duration: 3000,
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
