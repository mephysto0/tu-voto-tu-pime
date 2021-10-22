import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.services';
import { DomSanitizer } from '@angular/platform-browser';

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

  
 
  constructor(private productService: ProductService, private router: Router, private sanitizer: DomSanitizer) { }
  public previsualizacion: any;
  public archivos: any = [];
  public loading: boolean | undefined



  ngOnInit(): void {
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



  uploadProduct(nombre: HTMLInputElement, tienda: HTMLTextAreaElement, categoria: HTMLTextAreaElement, comentario: HTMLTextAreaElement, precio: HTMLTextAreaElement ) {
    this.productService
      .createProduct(nombre.value, tienda.value, this.archivos[0], categoria.value, comentario.value, precio.value)
      .subscribe(
        res => {
          console.log(res);
          
          this.router.navigate(['tienda/newpr'])
        },
        err => console.log(err)
      );
    return false;
  }

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }
  
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
