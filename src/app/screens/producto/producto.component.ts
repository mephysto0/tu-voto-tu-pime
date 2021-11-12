import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/producto.model';
import { Store } from 'src/app/models/tienda.model';
import { ProductService } from 'src/app/services/product.services';

import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  id: string | any;
  product: Product | any;
  aux2 : string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private localstorage : LocalStorageService
  ) { }


  ngOnInit(): void {


    const aux = this.localstorage.get('usuario');
    this.aux2 = aux.user;


    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];


      this.productService.getProduct(this.id)
        .subscribe(
          res => {
            this.product = res;
          },
          err => console.log(err)
        )
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(res => {
        console.log(res)
        //ruta a la cual redigira al borrar
        this.router.navigate(['/tienda',this.aux2]);
      })
  }

  updateProduct(nombre: HTMLInputElement, tienda: HTMLInputElement, categoria: HTMLSelectElement, comentario: HTMLInputElement, precio: HTMLInputElement): boolean {
    this.productService.updateProduct(this.product._id, nombre.value, tienda.value, categoria.value, comentario.value, precio.value )
      .subscribe(res => {
        console.log(res);
        //ruta a la cual redigira al editar
        this.router.navigate(['/tienda']);
      });
    return false;
  }

}
