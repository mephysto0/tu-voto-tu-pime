import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/registro', user);
  }

  signInUser(user: any) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn() {
    //si el token existe entrega un true
    sessionStorage.getItem('id')
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('id')
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
   

}