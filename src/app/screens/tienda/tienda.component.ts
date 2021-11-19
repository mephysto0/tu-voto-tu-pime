import { Component, OnInit } from '@angular/core';
import {Store} from '../../models/tienda.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserStore } from 'src/app/models/UserStore.model';
import { ProductService } from '../../services/product.services'
import { Product } from '../../models/producto.model'
import { StoreService } from 'src/app/services/store/store.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public productos : Product[] | undefined;
  public tiendas :  Store[] | undefined;
  //public store :  Store | any;
  public nombre: string | any;

  aux2 : string | undefined;

  products: Product[] = [];
  id: any;
  userstore: UserStore | any;
  idU: any;
  store :  Store | any;


  constructor(
    private productService: ProductService,
    private router: Router,
    private storeservice: StoreService,

    private activatedRoute: ActivatedRoute,
    private localstorage : LocalStorageService
  ) { }



  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params.name;

    this.activatedRoute.params.subscribe(params => {
      this.idU = params['id'];

      this.storeservice.getUserStore(this.idU)
        .subscribe(
          res => {
            this.store = res;

          },
          err => console.log(err)
        )
    });

<<<<<<< HEAD



    const aux = this.localstorage.get('usuario');
    //console.log(aux.user);
    this.aux2 = aux.user;


=======
>>>>>>> f3d13b402f8a84eb24ae8c37479affe0c32d28b6
    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
        },
        err => console.log(err)
      )
  }
<<<<<<< HEAD
  updateTienda(nombre_tienda: HTMLInputElement, instagram: HTMLInputElement,twitter: HTMLInputElement,facebook: HTMLInputElement,numero_telefono: HTMLInputElement,descripcion: HTMLInputElement): boolean {
=======

  updateStore(nombre_tienda: HTMLInputElement, instagram: HTMLInputElement,twitter: HTMLInputElement,facebook: HTMLInputElement,numero_telefono: HTMLInputElement,descripcion: HTMLInputElement): boolean {
    console.log('entro')
>>>>>>> f3d13b402f8a84eb24ae8c37479affe0c32d28b6
    this.storeservice.updateStore(this.store._id, nombre_tienda.value, instagram.value,twitter.value,facebook.value,numero_telefono.value,descripcion.value)
      .subscribe(res => {
        console.log(res);
        //ruta a la cual redigira al editar
        //this.router.navigate(['/tienda']);
      });
    return false;
  }

  reloadCurrentPage() {
    window.location.reload();
   }


}
