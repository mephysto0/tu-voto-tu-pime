import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.services'
import { Product } from '../../models/producto.model'

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public productos : Product[] | undefined;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,

    ){}

  ngOnInit(): void {


    this.productService.getProducts()
    .subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )

  }

}
