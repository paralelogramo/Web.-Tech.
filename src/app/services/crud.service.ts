import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from './Users';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Dependence } from './Dependence';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = "http://localhost/meanoto"

  constructor( private clienteHttp: HttpClient ) {}

  register(user: User): Observable<any>{
    let headers= new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const httpOptions = {
      headers: headers
    };
    return this.clienteHttp.post(`${this.baseUrl}/registerUser.php`,user)
  }

  getUser(user: User): Observable<User>{
    let headers= new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const httpOptions = {
      headers: headers
    };

    return this.clienteHttp.post<User>(`${this.baseUrl}/getUser.php`,user);
  }

  getUserById(id: number): Observable<User>{
    return this.clienteHttp.post<User>(`${this.baseUrl}/getUserById.php`,id);
  }

  getUserByIdReduced(id: number): Observable<User>{
    return this.clienteHttp.post<User>(`${this.baseUrl}/getUserByIdReduced.php`,id);
  }

  getUserReduced(){
    return this.clienteHttp.get<any>(`${this.baseUrl}/getUserReduced.php`);
  }

  registerDependence(dependence: Dependence): Observable<any>{
    return this.clienteHttp.post(`${this.baseUrl}/registerDependence.php`, dependence);
  }

  getAllDependences(){
    return this.clienteHttp.get<any>(`${this.baseUrl}/getAllDependences.php`)
  }

  deleteDependence(id: number){
    return this.clienteHttp.delete(`${this.baseUrl}/deleteDependece.php/?delete=`+id)
  }
}
