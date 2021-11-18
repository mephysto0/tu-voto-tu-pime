import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  form: FormGroup | any;
  nombreT : string | any;
  aux2 : string | undefined;

  public previsualizacion: any;
  public archivos: any = [];
  public loading: boolean | undefined

  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private localstorage : LocalStorageService,
    private productService: ProductService,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.nombreT= this.rutaActiva.snapshot.params.id;
    const aux = this.localstorage.get('usuario');
    this.aux2 = aux.user;

    console.log(this.nombreT)

  }


  //Formulario validaciones
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['',  [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]],
      categoria: ['', [Validators.required]],
      comentario: ['', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/),Validators.maxLength(100)]],
      precio: ['', [Validators.required,  Validators.pattern(/^[0-9]+$/)]],
    });
  }
  //funcion de guardado
  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
      this.subirProduct();
    }
    else{
      this.form.markAllAsTouched();
    }
  }

  get nombreField(){
    return this.form.get('nombre');
  }
  get categoriaField(){
    return this.form.get('categoria');
  }
  get comentarioField(){
    return this.form.get('comentario');
  }
  get precioField(){
    return this.form.get('precio');
  }


  subirProduct(){
    this.productService.createProduct
      (this.form.nombre,this.nombreT,this.archivos[0],this.form.categoria,this.form.comentario,this.form.precio)
      .subscribe(
        res =>{
          console.log(res);

          this.router.navigate(['/tienda',this.aux2])
        },
        err => console.log(err)
      );
    return false
  }



  capturarFile(event:any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
    this.archivos.push(archivoCapturado)
    console.log(event.target.files);
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
  //para limpiar la vista previa de las imagens
  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }
  reload(){
    window.location.reload();
  }


}
