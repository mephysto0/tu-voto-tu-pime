import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStore } from 'src/app/models/UserStore.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {
  user: any;
  ad:any;
  id:any;

  aux: UserStore | any;

  constructor(
    private usuarioservice: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.params.id;
    this.ad = this.activatedRoute.snapshot.params.admin;
    this.id = this.activatedRoute.snapshot.params.userID;

    this.usuarioservice.getUser(this.id).subscribe(
      res =>{
        this.aux = res;
      },
      err => console.log(err)
    )

  }
  updateUser(nombre: HTMLInputElement, apellido: HTMLInputElement,email: HTMLInputElement,password: HTMLInputElement): boolean {
    console.log('sss')
    this.usuarioservice.updateUser(this.user, nombre.value, apellido.value,email.value,password.value)
      .subscribe(res => {
        console.log(res);
        this.route.navigate(['/admin',this.user,this.ad])

      });
    return false;
  }
  volver(){
    this.route.navigate(['/admin',this.user,this.ad])
  }

}
