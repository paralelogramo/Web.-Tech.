import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindependencies',
  templateUrl: './admindependencies.component.html',
  styleUrls: ['./admindependencies.component.css']
})
export class AdmindependenciesComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  goCounts(): any{
    this.router.navigateByUrl('/admin/accounts');
  }

  goModules(): any{
    this.router.navigateByUrl('/admin/modules');
  }

  goEvents(): any{
    this.router.navigateByUrl('/admin/events');
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/admin/editprofile');
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }
  
}
