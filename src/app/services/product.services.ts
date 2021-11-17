import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Product} from '../models/producto.model'
import { LocalStorageService } from './localStorage/local-storage.service';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  URI = 'http://localhost:4000/tienda/newpr';
  URI2 = 'http://localhost:4000/tienda/producto';
  URI3 = 'http://localhost:4000/tienda/irstore';



  constructor(
    private http: HttpClient,
    private localstorage : LocalStorageService,) { }

  getUser(){
    const aux = this.localstorage.get('usuario');
    return aux.user
  }

  createProduct(
    nombre: string,
    tienda: string,
    image: File,
    categoria: string,
    comentario: string,
    precio: string)
  {
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('tienda', tienda);
    fd.append('image', image);
    fd.append('categoria', categoria);
    fd.append('comentario', comentario);
    fd.append('precio', precio);
    return this.http.post(this.URI, fd);
  }

  likeProduct(id: string) {
    const userId = this.getUser();
    return this.http.post<any>(`${this.URI2}/${id}/${userId}`,id,userId);
  }

  isliked(id: string) {
    const userId = this.getUser();
    return this.http.get<any>(`${this.URI2}/${id}/${userId}`);
  }

  getProducts() {
    return this.http.get<Product[]>(this.URI);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.URI}/${id}`);
  }



  deleteProduct(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateProduct(
    id: string,
    nombre: string,
    tienda: string,
    categoria: string,
    comentario: string,
    precio: string)
  {
    return this.http.put(`${this.URI}/${id}`, {nombre, tienda, categoria, comentario ,precio });
  }


  searchStore(nombre_tienda: string){
    return this.http.post<any>(`${this.URI3}`,nombre_tienda);
  }

  

  
}