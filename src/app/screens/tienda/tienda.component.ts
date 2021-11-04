import { Component, OnInit } from '@angular/core';
import {Store} from '../../models/tienda.model';
import { StoreService } from 'src/app/service/store/store.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

import { ProductService } from '../../services/product.services'
import { Product } from '../../models/producto.model'

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


  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private StoreService: StoreService,
    private activatedRoute: ActivatedRoute,
    private localstorage : LocalStorageService
  ) { }



  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params.name;
    this.store = this.StoreService.getByName(this.nombre as string);


    console.log(this.localstorage.get('usuario'));

    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
        },
        err => console.log(err)
      )
  }

}
