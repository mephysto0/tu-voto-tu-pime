import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/producto.model';
import { ProductService } from 'src/app/service/product/product.service';
import {Store} from '../../models/tienda.model';
import { StoreService } from 'src/app/service/store/store.service';
import { ActivatedRoute, Params } from '@angular/router';
//import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public productos : Product[] | undefined;
  public tiendas :  Store[] | undefined;
  public store :  Store | undefined;
  public nombre: string | undefined;

  constructor(
    private productService: ProductService,
    private StoreService: StoreService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.productos = this.productService.getAllProduct();
    this.nombre = this.activatedRoute.snapshot.params.name;
    this.store = this.StoreService.getByName(this.nombre as string);
  }

}
