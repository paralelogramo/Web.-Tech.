import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dependence } from 'src/app/services/Dependence';
import { CrudService } from '../../../../services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  dependenceModel: Dependence = new Dependence(undefined,undefined,undefined,undefined)

  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any,
    private crudService: CrudService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  registerDependence(): any{
    this.crudService.registerDependence(this.dependenceModel).subscribe((resp) => {
      if(resp.resultado == false){
        this.snackBar.open('Ups! Revisa los campos!', undefined, {
          duration: 2000,        
        })
        this.dialogRef.close({event: 'close'})
      }
      else{
        this.snackBar.open('Dependencia Registrada con Éxito!', undefined, {
          duration: 2000,        
        })
      }
    })
  }

  closeDialog(): void{    
    this.dialogRef.close({event: 'close'})
  }

}
