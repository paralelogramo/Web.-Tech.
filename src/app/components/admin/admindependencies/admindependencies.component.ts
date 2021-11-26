import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../services/Users';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Dependence } from '../../../services/Dependence';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

const SIZE: number = 10;

@Component({
  selector: 'app-admindependencies',
  templateUrl: './admindependencies.component.html',
  styleUrls: ['./admindependencies.component.css']
})
export class AdmindependenciesComponent implements OnInit {
  userSession: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  dependence: Dependence = new Dependence(undefined,undefined,undefined,undefined)

  moduleReady: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'capacity', 'location'];

  dataSource = new MatTableDataSource<Dependence>();

  allDependences: Dependence[] = [];

  page_size: number = SIZE;
  page_number: number = 1;
  page_size_options: number[] = [SIZE];
  pageEvent: PageEvent;

  selectedRow: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService,
    public dialog: MatDialog,
    public dialog2: MatDialog,
    private snackBar: MatSnackBar,
  ) {
    this.route.params.subscribe( params => {
      this.getSessionUser(params.id)
      this.getAllDependences()
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  selectDependence(row: any): any{
    if(this.selectedRow == undefined){
      this.selectedRow = row
      this.selectedRow.selected = !this.selectedRow.selected
    }
    else{
      if(this.selectedRow.id == row.id){
        this.selectedRow.selected = !this.selectedRow.selected
        this.selectedRow = undefined
      }
      else{
        this.selectedRow.selected = !this.selectedRow.selected
        this.selectedRow = row
        this.selectedRow.selected = !this.selectedRow.selected
      }
    }
  }

  getAllDependences(): any{
    this.crudService.getAllDependences().subscribe((data) => {
      this.allDependences = data;
      this.dataSource.data = this.allDependences.slice(0,this.page_size)
    })
  }

  onPageChange(event: PageEvent): void{    
    this.dataSource.data = this.allDependences.slice(event.pageIndex*event.pageSize,(event.pageIndex+1)*event.pageSize)
  }

  getSessionUser(id: number): any{
    this.crudService.getUserById(id).subscribe(user => {
      this.userSession = user;
    })
  }

  goAccounts(): any{
    this.router.navigateByUrl('/admin/accounts/'+this.userSession.id);
  }

  goModules(): any{
    this.router.navigateByUrl('/admin/modules/'+this.userSession.id);
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/admin/editprofile/'+this.userSession.id);
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }
  
  openDialog(): void{
    const dialog = this.dialog.open(DialogAddComponent)
    dialog.afterClosed().subscribe(res => {
      this.getAllDependences();
    })
  }

  openDialog2(): void{
    if(this.selectedRow == undefined){
      this.snackBar.open('Debes seleccionar una sala primero!', undefined, {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'center'
      })
    }
    else{
      const dialog = this.dialog2.open(DialogDeleteComponent)
      dialog.afterClosed().subscribe((res: string) => {
        if(res == "yes"){
          this.crudService.deleteDependence(this.selectedRow.id).subscribe((res) =>{
            this.getAllDependences()
          })
        }
      })
    }
  }
}
