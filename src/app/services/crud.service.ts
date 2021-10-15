import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = "http://localhost/meanoto"

  constructor( private clienteHttp: HttpClient ) {}

  register(user: User): Observable<string>{
    let headers= new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const httpOptions = {
      headers: headers
    };
    return this.clienteHttp.post(`${this.baseUrl}/registerUser.php`,user,{responseType: 'text'});
  }

  getUser(email: String, pass: String): Observable<Object>{
    return this.clienteHttp.get(`${this.baseUrl}/getUser.php?email=${email}&pass=${pass}`);
  }
}
