import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from 'src/app/models/tienda.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  URI = 'http://localhost:4000/store';

  constructor(private http: HttpClient) { }

  createStore(usuario:string ,nombre_tienda: string, instagram: string, image: File, twitter: string, facebook: string, telefono: string) {
    const fd = new FormData();
    fd.append('usuario', usuario);
    fd.append('nombre_tienda', nombre_tienda);
    fd.append('instagram', instagram);
    fd.append('image', image);
    fd.append('twitter', twitter);
    fd.append('facebook', facebook);
    fd.append('telefono', telefono);
    return this.http.post(this.URI, fd);
  }

  getStores() {
    return this.http.get<Store[]>(this.URI);
  }

  getStore(id: string) {
    return this.http.get<Store>(`${this.URI}/${id}`);
  }

  deleteStore(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateStore(id: string, nombre_tienda: string, instagram: string, twitter: string, facebook: string, telefono: string) {
    return this.http.put(`${this.URI}/${id}`, {nombre_tienda, instagram, twitter, facebook ,telefono });
  }
}
