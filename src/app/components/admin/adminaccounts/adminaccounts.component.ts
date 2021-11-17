import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from '../../../services/Users';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { DialogComponent } from './dialog/dialog.component';

const SIZE: number = 10;

@Component({
  selector: 'app-adminaccounts',
  templateUrl: './adminaccounts.component.html',
  styleUrls: ['./adminaccounts.component.css']
})
export class AdminaccountsComponent implements OnInit {
  userSession: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
  userToShow: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
  typeAccount: string = "";
  userReady: boolean = false;
  isStudent: boolean = false;
  isAproved: number|undefined = 0;

  displayedColumns: string[] = ['id','mainName', 'surName', 'email'];
  
  users: User[] = [];
  allUsers: User[] = [];

  page_size: number = SIZE;
  page_number: number = 1;
  page_size_options: number[] = [SIZE];
  pageEvent: PageEvent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService,
    public dialog: MatDialog)
    {
      this.route.params.subscribe( params => {
        this.getSessionUser(params.id)
        this.getAllUsers();
      })
  }

  ngOnInit(): void {}

  showUser(row: any): void{
    this.crudService.getUserByIdReduced(row.id).subscribe((data: User) => {
      this.userToShow = data;
      this.isAproved = this.userToShow.isAproved;
      
      if(data.type == 0){
        this.typeAccount = "Administrador";
        this.isStudent = false;
      }
      if(data.type == 1){
        this.typeAccount = "Profesor";
        this.isStudent = false;
      }
      if(data.type == 2){
        this.typeAccount = "Operativo";
        this.isStudent = false;
      }
      if(data.type == 3){
        this.typeAccount = "Estudiante";
        this.isStudent = true;
      }
      this.userReady = true;
    })
  }

  getAllUsers(): any{
    this.crudService.getUserReduced().subscribe(data => {
      this.allUsers = data;
      this.users = this.allUsers.slice(0,this.page_size)
    })
  }  
  
  onPageChange(event: PageEvent): void{    
    this.users = this.allUsers.slice(event.pageIndex*event.pageSize,(event.pageIndex+1)*event.pageSize)
  }

  getSessionUser(id: number): any{
    this.crudService.getUserById(id).subscribe(user => {
      this.userSession = user;
    })
  }

  goModules(): any{
    this.router.navigateByUrl('/admin/modules/'+this.userSession.id);
  }

  goEvents(): any{
    this.router.navigateByUrl('/admin/events/'+this.userSession.id);
  }

  goDependencies(): any{
    this.router.navigateByUrl('/admin/dependencies/'+this.userSession.id);
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/admin/editprofile/'+this.userSession.id);
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }

  openDialog(): void{
    const dialog = this.dialog.open(DialogComponent)
    dialog.afterClosed().subscribe(res => {
      this.getAllUsers();
    })
  }
}