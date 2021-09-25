import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from './Users';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost/users/';

  constructor( private clienteHttp: HttpClient ) {}

  registerUser(data:User): Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",data);
  }
}
