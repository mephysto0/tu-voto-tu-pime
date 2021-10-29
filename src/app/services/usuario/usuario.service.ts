import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URI = 'http://localhost:4000/private';

  constructor() { }
}
