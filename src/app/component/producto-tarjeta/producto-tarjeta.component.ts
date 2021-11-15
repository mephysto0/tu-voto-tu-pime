import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';
import { Product} from '../../models/producto.model';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscriber } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {


  @Input()
  public producto!: Product;

  isActive : boolean | any;


  constructor(
    private productService: ProductService,
    private router: Router,
    private localstorage : LocalStorageService,
    ) {
   }

  ngOnInit(): void {


    const aux2 = this.productService.getUser();
    this.isActive = aux2;
    
    
  }


	onClick() {

		this.producto.likes += (this.isActive) ? -1 : 1;
		this.isActive = !this.isActive;
    this.productService.likeProduct(this.producto._id).subscribe();
    this.productService.isliked(this.producto._id).subscribe();
	}

}
