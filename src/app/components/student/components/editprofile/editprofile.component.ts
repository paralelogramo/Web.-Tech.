import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goCourses(): any{
    this.router.navigateByUrl('/student/mycourses');
  }

  goEvents(): any{
    this.router.navigateByUrl('/student/myevents');
  }

  goEditProfile(): any{
    this.router.navigateByUrl('/student/editprofile');
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }
}
