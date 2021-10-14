import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto.model';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public productos : Product[] | undefined;

  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
    this.productos = this.productService.getAllProduct();
  }
}
