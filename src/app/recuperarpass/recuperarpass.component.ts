import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStore } from '../models/UserStore.model';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.component.html',
  styleUrls: ['./recuperarpass.component.css']
})
export class RecuperarpassComponent implements OnInit {
  id: string | any;
  user: UserStore | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioservice: UsuarioService,
    private router: Router,
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.usuarioservice.getUser(this.id)
        .subscribe(
          res => {
            this.user = res;
            
          },
          err => console.log(err)
        );
  });
}
  resetpassword(password: HTMLInputElement): boolean {
    this.usuarioservice.resetpass(this.user._id, password.value,)
      .subscribe(res => {
        console.log(res);
        //ruta a la cual redigira al editar
        //this.router.navigate(['/tienda']);
      });
    return false;
  }



  
}
