import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from 'src/app/models/tienda.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  URI = 'http://localhost:4000/tienda';

  constructor(private http: HttpClient) { }

  createStore(
    nombreTienda: string,
    imageUrl: File ,
    usuario: string,
    instaUrl: string,
    faceUrl: string,
    twitUrl: string,
    phone: string,
  ){
    const fd = new FormData();
    fd.append();
  }

}
