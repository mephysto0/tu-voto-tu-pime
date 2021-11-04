import { VistaProductoComponent } from './screens/vista-producto/vista-producto.component';
import { ProductoComponent } from './screens/producto/producto.component';
import { PerfilTiendaComponent } from './screens/perfil-tienda/perfil-tienda.component';
import { CategoriasComponent } from './screens/categorias/categorias.component';
import { VotacionesComponent } from './screens/votaciones/votaciones.component';
import { LoginComponent } from './screens/login/login.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { PrincipalComponent } from './screens/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { PrivateComponent } from './screens/private/private.component';

import { ProductformComponent } from './component/productform/productform.component';
import { AuthGuard } from './auth.guard';

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
    path: 'tienda/:id', component: TiendaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tienda/newpr', component: ProductformComponent
  },
  {
    path: 'edit_producto/:id', component: ProductoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'producto/:id', component: VistaProductoComponent
  },
  {
    path: 'private/:id', component: PrivateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil-user/:id', component: PerfilTiendaComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
