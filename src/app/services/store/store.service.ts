import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from 'src/app/models/tienda.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  

  URI = 'http://localhost:4000/store';
  URI2 = 'http://localhost:4000/stores';

  constructor(private http: HttpClient) { }

  createStore(usuario:string ,nombre_tienda: string, instagram: string, image: File, twitter: string, facebook: string, numero_telefono: string, descripcion: string) {
    const fd = new FormData();
    fd.append('usuario', usuario);
    fd.append('nombre_tienda', nombre_tienda);
    fd.append('instagram', instagram);
    fd.append('image', image);
    fd.append('twitter', twitter);
    fd.append('facebook', facebook);
    fd.append('numero_telefono', numero_telefono);
    fd.append('descripcion', descripcion);
    return this.http.post(this.URI, fd);
  }

  getStores() {
    return this.http.get<Store[]>(this.URI);
  }

  getStore(id: string) {
    return this.http.get<Store>(`${this.URI}/${id}`);
  }
//idU es el parametro de id del usuario conectado a tienda que se ustilizara para buscarla en el back
  getUserStore(id: string) {
    return this.http.get<Store>(`${this.URI2}/${id}`);
  }



  deleteStore(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateStore(id: string, nombre_tienda: string, instagram: string, twitter: string, facebook: string, numero_telefono: string, descripcion: string) {
    return this.http.put(`${this.URI}/${id}`, {nombre_tienda, instagram, twitter, facebook ,numero_telefono , descripcion});
  }



}
