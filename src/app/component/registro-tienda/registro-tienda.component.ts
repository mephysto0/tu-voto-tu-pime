import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.services';


@Component({
  selector: 'app-registro-tienda',
  templateUrl: './registro-tienda.component.html',
  styleUrls: ['./registro-tienda.component.css']
})
export class RegistroTiendaComponent implements OnInit {
  user= {
    nombre: '',
    apellido : '',
    rut: '',
    email: '',
    password: ''


   }


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  registrarse() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      )
  }

}
