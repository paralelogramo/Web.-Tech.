import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-adminaccounts',
  templateUrl: './adminaccounts.component.html',
  styleUrls: ['./adminaccounts.component.css']
})
export class AdminaccountsComponent implements OnInit {
  router: any;
  

  ngOnInit(): void {
    
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
