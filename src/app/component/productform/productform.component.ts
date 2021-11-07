import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.services';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  //file: File | undefined |any;
  photoSelected: any;

  aux2 : string | undefined;

  nombreT : string | any;


  constructor(
    private productService: ProductService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private localstorage : LocalStorageService,
    private rutaActiva: ActivatedRoute) { }

  public previsualizacion: any;
  public archivos: any = [];
  public loading: boolean | undefined



  ngOnInit(): void {

    this.nombreT= this.rutaActiva.snapshot.params.id;


    const aux = this.localstorage.get('usuario');
    this.aux2 = aux.user;
  }



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


//enviara los datos del formulario
  uploadProduct(nombre: HTMLInputElement, tienda:  HTMLInputElement, categoria: HTMLSelectElement, comentario:  HTMLInputElement, precio:  HTMLInputElement ) {
    this.productService
      .createProduct(nombre.value, this.nombreT, this.archivos[0], categoria.value, comentario.value, precio.value)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigate(['/tienda',this.aux2])
        },
        err => console.log(err)
      );
    return false;
  }

//para limpiar la vista previa de las imagens
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
}
