import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserStore } from 'src/app/models/UserStore.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URI = 'http://localhost:4000/user';
  URI2 = 'http://localhost:4000/resetpassword';
  URI3 = 'http://localhost:4000/newpassword';

  constructor(private http: HttpClient) { }


  getUser(id: string) {
    return this.http.get<UserStore>(`${this.URI}/${id}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateUser(id: string, nombre: string, apellido: string,  email: string, password : string) {
    return this.http.put(`${this.URI}/${id}`, {nombre, apellido,password });
  }

  getUsers(){
    return this.http.get<UserStore>(`${this.URI}`);
  }
  

  //---------------------------para resetear contraseña--------------------------------------------------------------
  resetpass(id: string, password: string, ) {
    return this.http.put(`${this.URI3}/${id}`, {password});
  }

  sendemail( email: string, ) {
    return this.http.post(`${this.URI2}`, {email});
  }



}
