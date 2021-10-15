import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from './Users';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = "http://localhost/meanoto"

  constructor( private clienteHttp: HttpClient ) {}

  register(user: User) {
    let headers= new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const httpOptions = {
      headers: headers
    };
    return this.clienteHttp.post(`${this.baseUrl}/registerUser.php`,user,{responseType: 'text'});
  }
}
