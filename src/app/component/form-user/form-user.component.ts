import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.services';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  form: FormGroup | any;




  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  private buildForm() {

    this.form = this.formBuilder.group({
      nombre: ['',  [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]],
      apellido: ['', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,  Validators.minLength(8)]],
    });

  }

  //este valida los campos que sean correctos y que esten todos llenos
  //este se llama en el ngsummit del html
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    //este envia los datos del formulario
      this.registrarse()
    } else {
      this.form.markAllAsTouched();
    }
  }

  registrarse() {
    this.authService.signUpUser(this.form.value)
      .subscribe(
        res => {
          console.log(res);

          this.router.navigate(['/login']);
        },
        err => console.log(err)
      )
  }


  get emailField(){
    return this.form.get('email');
  }
  get nombreField(){
    return this.form.get('nombre');
  }
  get apellidoField(){
    return this.form.get('apellido');
  }
  get rutField(){
    return this.form.get('rut');
  }

  get passwordField(){
    return this.form.get('password');
  }

}
