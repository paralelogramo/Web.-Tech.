import { Component, OnInit } from '@angular/core';
import { User } from '../../../services/Users';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Module } from '../../../services/Module';

class ModuleToShow {
  id: number|undefined;
  name: string|undefined;
  career: string|undefined;
  professor: string|undefined;
}

const SIZE: number = 10;

@Component({
  selector: 'app-adminmodules',
  templateUrl: './adminmodules.component.html',
  styleUrls: ['./adminmodules.component.css']
})
export class AdminmodulesComponent implements OnInit {
  userSession: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  displayedColumns: string[] = ['id','name', 'career', 'professor']

  modulesTable: ModuleToShow[] = []
  modules: ModuleToShow[] = []
  allModules: Module[] = []

  page_size: number = SIZE;
  page_number: number = 1;
  page_size_options: number[] = [SIZE];
  pageEvent: PageEvent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe( params => {
      this.getSessionUser(params.id)
      this.initAllModules()
      this.getAllModules()  
    })
  }

  ngOnInit(): void {
  }

  getAllModules(): any{
    this.modulesTable = this.modules.slice(0,this.page_size)
  }

  initAllModules(): any{
    this.crudService.getProfesorModule().subscribe(data => {
      this.allModules = data
      let partition = this.allModules.slice(0,this.page_size)
      for (let index = 0; index < partition.length; index++) {
        let m: ModuleToShow = new ModuleToShow();
        this.crudService.getUserByIdReduced(partition[index].refProf).subscribe((data) => {
          m.id = partition[index].id
          m.name = partition[index].name
          m.career = partition[index].career
          m.professor = data.mainName+" "+data.surName
          this.modules.push(m)
        })
      }
    })
  } 

  onPageChange(event: PageEvent): void{    
    // this.modules = this.allModules.slice(event.pageIndex*event.pageSize,(event.pageIndex+1)*event.pageSize)
  }

  goAccounts(): any{
    this.router.navigateByUrl('/admin/accounts/'+this.userSession.id);
  }

  goDependencies(): any{
    this.router.navigateByUrl('/admin/dependencies/'+this.userSession.id);
  }

  goEvents(): any{
    this.router.navigateByUrl('/admin/events/'+this.userSession.id);
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/admin/editprofile/'+this.userSession.id);
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }

  getSessionUser(id: number): any{
    this.crudService.getUserById(id).subscribe(user => {
      this.userSession = user;
    })
  }
}
