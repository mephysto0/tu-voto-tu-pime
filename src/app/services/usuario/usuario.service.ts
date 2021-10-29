import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserStore } from 'src/app/models/UserStore.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URI = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }
  

  getUser(id: string) {
    return this.http.get<UserStore>(`${this.URI}/${id}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateUser(id: string, nombre: string, apellido: string, rut: string, razon_social: string, email: string, password : string) {
    return this.http.put(`${this.URI}/${id}`, {nombre, apellido,rut,razon_social,email,password });
  }
}
