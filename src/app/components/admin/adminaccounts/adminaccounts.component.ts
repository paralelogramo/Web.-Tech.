import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  lastName: string;
  nick: string;
  email: string;
  isActive:boolean;
}



@Component({
  selector: 'app-adminaccounts',
  templateUrl: './adminaccounts.component.html',
  styleUrls: ['./adminaccounts.component.css']
})
export class AdminaccountsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'lastName', 'nick','email','isActive'];
  checked = false;
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Juan', lastName: 'Gonzales', nick: 'Alfa',email:'a@gmail.com',isActive:this.checked},
    {position: 2, name: 'Pedro', lastName: 'Sepulveda', nick: 'Beta',email:'a@gmail.com',isActive:this.checked},
    {position: 3, name: 'Martin', lastName: 'Carmona', nick: 'Gama',email:'a@gmail.com',isActive:this.checked},
    {position: 4, name: 'Julieta', lastName: 'Pena', nick: 'Delta',email:'a@gmail.com',isActive:this.checked},
    {position: 5, name: 'Helena', lastName: 'Coleman', nick: 'Epcilon',email:'a@gmail.com',isActive:this.checked},
    {position: 6, name: 'Tony', lastName: 'Stark', nick: 'Theta',email:'a@gmail.com',isActive:this.checked},
    {position: 7, name: 'Diego', lastName: 'Lagos', nick: 'Eta',email:'a@gmail.com',isActive:this.checked},
    {position: 8, name: 'Cristian', lastName: 'Banda', nick: 'Pi',email:'a@gmail.com',isActive:this.checked},
    {position: 9, name: 'Vicente', lastName: 'Rojas', nick: 'Tau',email:'a@gmail.com',isActive:this.checked},
    {position: 10, name: 'Fernando', lastName: 'Pino', nick: 'Mu',email:'a@gmail.com',isActive:this.checked},
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.sort=new MatSort
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
  }

}
