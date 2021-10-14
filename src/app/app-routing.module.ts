import { CategoriasComponent } from './screens/categorias/categorias.component';
import { VotacionesComponent } from './screens/votaciones/votaciones.component';
import { LoginComponent } from './screens/login/login.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { PrincipalComponent } from './screens/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './screens/tienda/tienda.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'votaciones', component: VotacionesComponent
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'tienda', component: TiendaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
