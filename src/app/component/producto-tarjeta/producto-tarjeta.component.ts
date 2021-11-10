import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';
import { Product} from '../../models/producto.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {


  @Input()
  public producto!: Product;

  constructor(private productService: ProductService,) {
   }

  ngOnInit(): void {
    console.log(this.producto._id)
  }


  like(): void{
    this.productService.likeProduct(this.producto._id).subscribe();
  }



}
