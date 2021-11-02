import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  constructor(private router: Router) {
    
  }

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
