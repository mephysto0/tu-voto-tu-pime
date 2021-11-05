import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserStore } from 'src/app/models/UserStore.model';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-form-tienda',
  templateUrl: './form-tienda.component.html',
  styleUrls: ['./form-tienda.component.css']
})
export class FormTiendaComponent implements OnInit {

  user: UserStore | any;
  public archivos: any = [];
  public previsualizacion: any;
  public loading: boolean | undefined

  constructor(
    private router: Router,
    private storeservice: StoreService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
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
