import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admineditprofile',
  templateUrl: './admineditprofile.component.html',
  styleUrls: ['./admineditprofile.component.css']
})
export class AdmineditprofileComponent implements OnInit {
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

  goDependencies(): any{
    this.router.navigateByUrl('/admin/dependencies');
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }
}
