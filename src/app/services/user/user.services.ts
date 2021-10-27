import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})

export class UserService {

  URI = 'http://localhost:4000/login';

  constructor(private http: HttpClient) { }

  
  login(id: string, email: string, contraseña: string) {
    return this.http.put(`${this.URI}/${id}`, {email, contraseña });
  }
}