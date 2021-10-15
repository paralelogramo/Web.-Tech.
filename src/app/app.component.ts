import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){    

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url
      }
    })

    // Consulta y retorna un string cn el tipo de usuario
  }

  tipoUsuario: String = "";
  url: String = "";
  title = 'tecweb';
}

