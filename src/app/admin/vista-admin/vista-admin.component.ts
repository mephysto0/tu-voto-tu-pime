import { StoreService } from 'src/app/services/store/store.service';
import { Component, OnInit } from '@angular/core';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Store } from 'src/app/models/tienda.model';
import { ProductService } from 'src/app/services/product.services';
import { Product } from 'src/app/models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.params.id;
    this.ad = this.activatedRoute.snapshot.params.admin;

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

    //funciones

    updateUser(nombre: HTMLInputElement, apellido: HTMLInputElement,email: HTMLInputElement,password: HTMLInputElement): boolean {
      this.usuarioservice.updateUser(this.user._id, nombre.value, apellido.value,email.value,password.value)
        .subscribe(res => {
          console.log(res);
          //ruta a la cual redigira al editar
          //this.router.navigate(['/tienda']);
        });
      return false;
    }

    editarusuario(id:any){
      let aux = id
      this.route.navigate(['edit-admin',this.user,this.ad,aux])
    }

    eliminarusuario(id:any){
      this.usuarioservice.deleteUser(id).subscribe(
        res =>{
          console.log(res)
          this.reloadCurrentPage()
        }
      )
    }

    eliminartienda(id:any){
      this.storeService.deleteStore(id).subscribe(
        res =>{
          console.log(res)
          this.reloadCurrentPage()
        }
      )
    }

    eliminarprodu(id:any){
      this.productService.deleteProduct(id).subscribe(
        res =>{
          console.log(res)
          this.reloadCurrentPage()
        }
      )
    }


    reloadCurrentPage() {
      window.location.reload();
     }

  }





