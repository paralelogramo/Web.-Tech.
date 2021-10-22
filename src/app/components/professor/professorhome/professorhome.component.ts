import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professorhome',
  templateUrl: './professorhome.component.html',
  styleUrls: ['./professorhome.component.css']
})
export class ProfessorhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  goCourses(): any{
    this.router.navigateByUrl('/professor/courses');
  }

  goEvents(): any{
    this.router.navigateByUrl('/professor/events');
  }

  goHelp(): any{
    this.router.navigateByUrl('/professor/help');
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }

}
