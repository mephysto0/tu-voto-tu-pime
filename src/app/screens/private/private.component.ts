import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'src/app/services/store/store.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { AuthService } from 'src/app/services/auth/auth.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  id: string | any;
  user: UserStore | any;
  emial : string | undefined;
  form: FormGroup | any;
  public previsualizacion: any;
  public archivos: any = [];
  public loading: boolean | undefined;

  tienda : boolean| any;

  aux2 : string | any;
  valor : any;
  a : string | any;
  b : string | any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioservice: UsuarioService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private storeservice: StoreService,
    private localstorage : LocalStorageService,
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    //datos local storage
    const aux = this.localstorage.get('usuario');
    this.aux2 = aux.user;
  //datos ruta
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.usuarioservice.getUser(this.id)
        .subscribe(
          res => {
            this.user = res;
            this.a = this.user.nombre.charAt(0);
            this.b = this.user.apellido.charAt(0);
          },
          err => console.log(err)
        );
        //si existe tienda o no
        this.storeservice.getUserStore(this.id).subscribe(res =>{
          this.valor = res;
          if(this.valor.usuario = this.id){
            this.tienda = true;
          }
          else{
             this.tienda = false;
          }
        },
        err => console.log(err)
        );
    });
  } //fin de ngoninit


  //funciones formulario
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre_tienda: ['',  [Validators.required,Validators.pattern(/^[a-zA-Z-0-9 ]+$/)]],
      instagram: [''],
      twitter: [''],
      facebook: [''],
      numero_telefono: ['', [Validators.required,  Validators.pattern(/^[0-9]+$/),Validators.minLength(8),Validators.maxLength(9)]],
      descripcion: ['', [Validators.required,Validators.maxLength(200)]],
    });
  }
  //BOTON GUARDAR DATOS
  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value)
      this.storeservice
      .createStore(
        this.user._id,
        this.form.value.nombre_tienda,
        this.form.value.instagram,
        this.archivos[0],
        this.form.value.twitter,
        this.form.value.facebook,
        this.form.value.numero_telefono,
        this.form.value.descripcion)
      .subscribe(
        res => {
          var aux = this.user._id;
          this.router.navigate(['/tienda',aux]);
        },
        err => console.log(err)
      );
    }
    else{
      this.form.markAllAsTouched();
    }
  }

  get nombre_tiendaField(){
    return this.form.get('nombre_tienda');
  }
  get instagramField(){
    return this.form.get('instagram');
  }
  get twitterField(){
    return this.form.get('twitter');
  }
  get facebookField(){
    return this.form.get('facebook');
  }
  get numero_telefonoField(){
    return this.form.get('numero_telefono');
  }
  get descripcionField(){
    return this.form.get('descripcion');
  }


  //funciones usuario
  eliminarUser(id : string){
    this.deleteUser(id);
    this.authService.logout();
    this.reloadCurrentPage();
  }

  deleteUser(id: string) {
    this.usuarioservice.deleteUser(id)
      .subscribe(res => {
        console.log(res);
        //ruta a la cual redigira al borrar

      });
  }

  updateUser(nombre: HTMLInputElement, apellido: HTMLInputElement,email: HTMLInputElement,password: HTMLInputElement): boolean {
    this.usuarioservice.updateUser(this.user._id, nombre.value, apellido.value,email.value,password.value)
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



//---------------------------------------------------------------seccion tienda---------------------------------------------------
//enviara los datos del formulario


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
    return $event;
  })
  capturarFile(event:any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    });
    this.archivos.push(archivoCapturado);
    //
     console.log(event.target.files);
  }

}

