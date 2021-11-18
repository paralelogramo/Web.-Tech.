import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { User } from '../../../services/Users';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  userModel: User = new User(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService)
    {
      this.route.params.subscribe( params =>{
        this.getSessionUser(params.id)
      })
  }

  ngOnInit(): void {
  }

  getSessionUser(id: number): any{
    this.crudService.getUserById(id).subscribe(user => {
      this.userModel = user;
    })
  }

  goCounts(): any{
    this.router.navigateByUrl('/admin/accounts/'+this.userModel.id);
  }

  goModules(): any{
    this.router.navigateByUrl('/admin/modules'+this.userModel.id);
  }

  goEvents(): any{
    this.router.navigateByUrl('/admin/events'+this.userModel.id);
  }

  goDependencies(): any{
    this.router.navigateByUrl('/admin/dependencies'+this.userModel.id);
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/admin/editprofile'+this.userModel.id);
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }

}
