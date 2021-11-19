import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.component.html',
  styleUrls: ['./recuperarpass.component.css']
})
export class RecuperarpassComponent implements OnInit {
  id: string | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioservice: UsuarioService,
    private router: Router,
  ) { 
    
  }

  ngOnInit(): void {
  }
  



}
