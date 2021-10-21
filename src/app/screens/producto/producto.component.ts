import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/producto.model';
import { Store } from 'src/app/models/tienda.model';
import { ProductService } from 'src/app/service/product/product.service';
import { StoreService } from 'src/app/service/store/store.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos : Product[] | undefined;
  public tiendas: Store [] | undefined;
  private id : string | undefined;
  public producto : Product | undefined;

  constructor(
    private productService: ProductService,
    private StoreService: StoreService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productos = this.productService.getAllProduct();
    this.tiendas = this.StoreService.getAllStore();
    this.producto = this.productService.getById(this.id  as string);
  }


}

