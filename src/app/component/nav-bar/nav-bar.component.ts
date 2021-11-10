import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.services';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  aux2 : string | undefined;

  constructor(
    public authService: AuthService,
    private localstorage : LocalStorageService
    ) { }

  ngOnInit(): void {
    const aux = this.localstorage.get('usuario');

    this.aux2 = aux.user;
  }



}
