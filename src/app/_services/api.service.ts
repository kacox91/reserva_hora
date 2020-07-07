import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  baseurl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getAllUsuario(): Observable<any> {
    return this.http.get<User[]>(this.baseurl + 'usuario')
  
  }
  crearUsuario(user: User){
    return this.http.post('http://localhost:3000/usuarios', user);
  }
  getCliente(id:number){/*  */
    return this.http.get<User>(this.baseurl + 'usuario/' + id)
  }
  getHoras(email: string): Observable<any> {
    return this.http.get(this.baseurl + 'hora/' + email + '/')
  }
  register(user: User) {
    return this.http.post(this.baseurl + `/users/register`, user);
}
  delete(id: number) {
    return this.http.delete(this.baseurl+`/users/`+ id);
}
  

}