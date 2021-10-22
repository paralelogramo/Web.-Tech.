import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operativehome',
  templateUrl: './operativehome.component.html',
  styleUrls: ['./operativehome.component.css']
})
export class OperativehomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goRegisters(): any{
    this.router.navigateByUrl('/operative/registers');
  }

  goEvents(): any{
    this.router.navigateByUrl('/operative/events');
  }

  goHelp(): any{
    this.router.navigateByUrl('/operative/help');
  }

  closeSession(): any{

    //Aqui falta borrar los token
    this.router.navigateByUrl('/signin');
  }

}
