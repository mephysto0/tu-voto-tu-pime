import { StoreService } from 'src/app/services/store/store.service';
import { Component, OnInit } from '@angular/core';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Store } from 'src/app/models/tienda.model';
import { ProductService } from 'src/app/services/product.services';
import { Product } from 'src/app/models/producto.model';
import { ActivatedRoute } from '@angular/router';

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


  user: any;
  ad:any;
  constructor(
    private usuarioservice: UsuarioService,
    private storeService: StoreService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.params.id;
    this.ad = this.activatedRoute.snapshot.params.admin;
    console.log(this.user)
    console.log(this.ad)
    //obtener usuarios
    this.usuarioservice.getUsers().subscribe(
      res =>{
        this.users = res;
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
    );
    //obtener productos
    this.productService.getProducts().subscribe(
      pes =>{
        this.product = pes;

      }
    )

    };


  }





