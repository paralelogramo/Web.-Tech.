import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmodules',
  templateUrl: './adminmodules.component.html',
  styleUrls: ['./adminmodules.component.css']
})
export class AdminmodulesComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  goCounts(): any{
    this.router.navigateByUrl('/admin/accounts');
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
