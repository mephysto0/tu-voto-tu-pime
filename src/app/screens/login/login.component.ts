import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user/user.services';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userService: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

  login(email: HTMLInputElement, contraseña:  HTMLInputElement ) {
    this.userService
      
      .subscribe(
        (        res: any) => {
          console.log(res);

          this.router.navigate(['tienda/newpr'])
        },
        (        err: any) => console.log(err)
      );
    return false;
  }

}
