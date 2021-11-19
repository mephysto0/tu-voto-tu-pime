import { StoreService } from 'src/app/services/store/store.service';
import { Component, OnInit } from '@angular/core';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Store } from 'src/app/models/tienda.model';
import { ProductService } from 'src/app/services/product.services';
import { Product } from 'src/app/models/producto.model';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent implements OnInit {

  admin: string| any;
  //modelos
  users: UserStore [] | any;
  store: Store[]| any;
  product: Product[]| any;

  constructor(
    private usuarioservice: UsuarioService,
    private storeService: StoreService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    //obtener usuarios
    this.usuarioservice.getUsers().subscribe(
      res =>{
        this.users = res;
        console.log(this.users)
        if (this.users.isAdmin){
          this.admin = 'si'
        }
        else{
          this.admin = 'no'
        }
      }
    )
    //obtener tiendas
    this.storeService.getStores().subscribe(
      tes =>{
        this.store = tes;
      }
    )
    //obtener productos
    this.productService.getProducts().subscribe(
      pes =>{
        this.product = pes;

      }
    )

    }


  }




