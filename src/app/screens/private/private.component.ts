import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  id: string | any;
  user: UserStore | any;
  emial : string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioservice: UsuarioService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    //this.emial = this.activatedRoute.snapshot.params.id,
    //console.log(this.emial)
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.usuarioservice.getUser(this.id)
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        )
    });
  }

  deleteUser(id: string) {
    this.usuarioservice.deleteUser(id)
      .subscribe(res => {
        console.log(res)
        //ruta a la cual redigira al borrar
        this.router.navigate(['/tienda']);
      })
  }

  updateProduct(nombre: HTMLInputElement, apellido: HTMLInputElement,rut: HTMLInputElement,razon_social: HTMLInputElement,email: HTMLInputElement,password: HTMLInputElement): boolean {
    this.usuarioservice.updateUser(this.user._id, nombre.value, apellido.value, rut.value, razon_social.value, email.value,password.value)
      .subscribe(res => {
        console.log(res);
        //ruta a la cual redigira al editar
        //this.router.navigate(['/tienda']);
      });
    return false;
  }

}

