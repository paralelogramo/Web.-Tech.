import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

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
