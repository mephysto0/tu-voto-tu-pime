import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.services';
import { Product } from 'src/app/models/producto.model';


@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  id: string | any;
  product: Product | any;
  tienda: any;
  store: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ){}

   ngOnInit(): void {
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
  like(): void{
    this.productService.likeProduct(this.product._id).subscribe();
    window.location.reload();
  }
//-----------------------------funcion del boton que redirige a tienda-----------------------------------------------------------
  searchstoreId(tienda :string) :void{
    tienda = this.product.tienda;
    this.productService.searchStore(this.product.tienda).subscribe(
      res=>{
      this.store= res;
      console.log(this.store)
      this.router.navigate(['/tienda-publica',this.store.usuario ]);

      },
      err => console.log(err)
    )



  };


}
