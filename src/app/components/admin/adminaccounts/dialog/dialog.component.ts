import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../services/Users';
import { CrudService } from '../../../../services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  accountTypes: string[] = ['Administrador','Operativo','Profesor']
  userModel: User = new User(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, undefined, undefined);
  type: string | undefined = undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any,
    private crudService: CrudService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  registerUser(): any{
    // aqui van las validaciones de campos
    if (this.type == "Administrador"){
      this.userModel.type = 0
    }
    else if (this.type == "Profesor"){
      this.userModel.type = 1
    }
    else if (this.type == "Operativo"){
      this.userModel.type = 2
    }
    
    this.crudService.register(this.userModel).subscribe((resp) => {
      if(resp.resultado == false){
        this.snackBar.open('Ups! Revisa las casillas!', undefined, {
          duration: 2000,        
        })
        this.dialogRef.close({event: 'close'})
      }
      else{
        this.snackBar.open('Usuario Registrado con Éxito!', undefined, {
          duration: 2000,        
        })
      }
    },
    (error) =>{
      console.log(error)
    })
    
  }

  closeDialog(): void{    
    this.dialogRef.close({event: 'close'})
  }

  selectedValue(event: MatSelectChange) {
    this.type = event.value
  }
}
