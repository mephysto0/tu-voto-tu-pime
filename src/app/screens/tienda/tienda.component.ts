import { Component, OnInit } from '@angular/core';
import {Store} from '../../models/tienda.model';
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

  aux2 : string | undefined;

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,

    private activatedRoute: ActivatedRoute,
    private localstorage : LocalStorageService
  ) { }



  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params.name;




    const aux = this.localstorage.get('usuario');
    console.log(aux.user);
    this.aux2 = aux.user;


    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
        },
        err => console.log(err)
      )
  }

}
