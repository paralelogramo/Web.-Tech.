import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminevents',
  templateUrl: './adminevents.component.html',
  styleUrls: ['./adminevents.component.css']
})
export class AdmineventsComponent implements OnInit {
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

  goDependencies(): any{
    this.router.navigateByUrl('/admin/dependencies');
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/admin/editprofile');
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }

}
