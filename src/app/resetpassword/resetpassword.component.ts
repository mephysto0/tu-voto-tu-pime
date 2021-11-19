import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  id: string | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioservice: UsuarioService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  sendMail(email: HTMLInputElement ) {
    this.usuarioservice
      .sendemail(email.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
    return false;
  }


}
