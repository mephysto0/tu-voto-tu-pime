import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.services';
import { Store } from 'src/app/models/tienda.model';

@Component({
  selector: 'app-vista-public-tienda',
  templateUrl: './vista-public-tienda.component.html',
  styleUrls: ['./vista-public-tienda.component.css']
})
export class VistaPublicTiendaComponent implements OnInit {
  nombreT: string | any;
  store: Store | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.nombreT = params['nombreT'];
      this.productService.searchStore(this.nombreT)
        .subscribe(
          res => {
            this.store = res;
          },
          err => console.log(err)
        ) 
    });
    
  }
  

}
