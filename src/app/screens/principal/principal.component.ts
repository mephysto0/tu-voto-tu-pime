import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/producto.model';
import { ProductService } from 'src/app/service/product/product.service';
import {Store} from '../../models/tienda.model';
import { StoreService } from 'src/app/service/store/store.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public productos : Product[] | undefined;
  public tiendas: Store [] | undefined;
  public bannerTienda: 'Le tallere' | undefined;

  constructor(
    private productService: ProductService,
    private StoreService:StoreService,
    private activatedRoute: ActivatedRoute,
    ){}

  ngOnInit(): void {
    this.productos = this.productService.getAllProduct();
    this.tiendas = this.StoreService.getAllStore();
  }

}
