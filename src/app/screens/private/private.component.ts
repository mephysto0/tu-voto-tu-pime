import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  id: string | any;
  user: UserStore | any;
  emial : string | undefined;
  public previsualizacion: any;
  public archivos: any = [];
  public loading: boolean | undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioservice: UsuarioService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private storeservice: StoreService,
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

  updateUser(nombre: HTMLInputElement, apellido: HTMLInputElement,rut: HTMLInputElement,razon_social: HTMLInputElement,email: HTMLInputElement,password: HTMLInputElement): boolean {
    this.usuarioservice.updateUser(this.user._id, nombre.value, apellido.value, rut.value, razon_social.value, email.value,password.value)
      .subscribe(res => {
        console.log(res);
        //ruta a la cual redigira al editar
        //this.router.navigate(['/tienda']);
      });
    return false;
  }




//---------------------------------------------------------------seccion tienda---------------------------------------------------
//enviara los datos del formulario
uploadStore(nombre_tienda: HTMLInputElement, instagram:  HTMLInputElement, twitter:  HTMLInputElement, facebook:  HTMLInputElement, telefono:  HTMLInputElement ) {
  this.storeservice
    .createStore(this.user._id,nombre_tienda.value, instagram.value, this.archivos[0], twitter.value, facebook.value, telefono.value)
    .subscribe(
      res => {
        console.log(res);
        var aux = this.user._id;
        console.log(aux)
        this.router.navigate(['/tienda',aux])
      },
      err => console.log(err)
    );
  return false;
}

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  //pasa las imagenes a formato 64 bits
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
    return $event
  })
  capturarFile(event:any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    //
     console.log(event.target.files);
  }

}

