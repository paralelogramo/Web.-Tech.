import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  dependence: string;
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public mydata: any
  ) { }

  ngOnInit(): void {
  }
}
