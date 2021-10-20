import { Injectable } from '@angular/core';
import { Product } from '../../models/producto.model';
import { PRODUCT } from './PRODUCT.const';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productos: Product[];


  constructor() {
    this.productos = PRODUCT;
  }

  public getAllProduct(): Product[] {
    return this.productos;
  }

  public getByTienda( id : string): Product | undefined{
    return this.productos.find((producto : Product) => producto._id === id);
  }
}
