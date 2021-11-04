import { Component, OnInit } from '@angular/core';
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

  id : string |  undefined;
  constructor(
    private authService: AuthService,
    private router: Router,
    private localstorage : LocalStorageService,
    ) { }

  ngOnInit(): void {
  }


  logIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          //console.log(res);
          localStorage.setItem('token', res.token);
          //para guardar el id del usuario conectado
          //const idUsuario = res.user;
          sessionStorage.setItem('id',res.user);

          this.localstorage.set('usuario', res);
          console.log(this.localstorage.get('usuario'));

          var data = sessionStorage.getItem('id');
          //console.log(data)
          this.router.navigate(['/private', data]);



        },
        err => console.log(err)
      )
  }

}
