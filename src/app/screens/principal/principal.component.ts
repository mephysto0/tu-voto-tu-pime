import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto.model';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public productos : Product[] | undefined;

  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
    this.productos = this.productService.getAllProduct();
  }

}
