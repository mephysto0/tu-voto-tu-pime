import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';
import { Product} from '../../models/producto.model';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {


  @Input()
  public producto!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    ) {
   }

  ngOnInit(): void {
  }


  like(): void{
    this.productService.likeProduct(this.producto._id).subscribe();
    window.location.reload();
  }
  



}
