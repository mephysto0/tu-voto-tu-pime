import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.services';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';



interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  loading : boolean | undefined
  errorMessage : string | undefined

  form: FormGroup | any;
  error : string |any;

  id : string |  undefined;
  constructor(
    private authService: AuthService,
    private router: Router,
    private localstorage : LocalStorageService,
    private formBuilder: FormBuilder,
    ) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

  //funcion para validar campos
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {


    //este envia los datos del formulario
      this. logIn()
    } else {
      this.form.markAllAsTouched();

    }
  }

  //funcion para login

  logIn() {
    this.loading = true;
    this.errorMessage = "";
    this.authService.signInUser(this.form.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          //para guardar el id del usuario conectado
          //const idUsuario = res.user;
          sessionStorage.setItem('id',res.user);

          this.localstorage.set('usuario', res);

          var data = sessionStorage.getItem('id');

          if(res.isadmin){
            var admin = true
            this.router.navigate(['/admin',res.user,admin])
          }
          else{
             this.router.navigate(['/private', data]);
          }

        },
        (err) => {
          console.log(err)
          this.errorMessage = '* El email o contraseña son incorrectos *'
          this.loading = false;
        }



      )
  }
  //get email y password
  get emailField(){
    return this.form.get('email');
  }
  get passwordField(){
    return this.form.get('password');
  }

}
