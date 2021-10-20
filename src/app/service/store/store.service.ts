import { Injectable } from '@angular/core';
import {Store} from '../../models/tienda.model';
import {STORE} from './STORE.const';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private tiendas: Store[];

  constructor() {
    this.tiendas = STORE;
  }

  public getAllStore(): Store[]{
    return this.tiendas;
  }


  public getByName(name: string): Store | undefined{
    return this.tiendas.find((tienda : Store ) => tienda.nombreTienda === name);
  }


}
