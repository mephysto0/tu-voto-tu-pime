import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotacionesComponent } from './screens/votaciones/votaciones.component';
import { LoginComponent } from './screens/login/login.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { ProductoComponent } from './screens/producto/producto.component';
import { PrincipalComponent } from './screens/principal/principal.component';
import { RegistroUsuarioComponent } from './component/registro-usuario/registro-usuario.component';
import { RegistroTiendaComponent } from './component/registro-tienda/registro-tienda.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductoTarjetaComponent } from './component/producto-tarjeta/producto-tarjeta.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { CategoriasComponent } from './screens/categorias/categorias.component';
import { PerfilTiendaComponent } from './screens/perfil-tienda/perfil-tienda.component';


@NgModule({
  declarations: [
    AppComponent,
    VotacionesComponent,
    LoginComponent,
    TiendaComponent,
    ProductoComponent,
    PrincipalComponent,
    RegistroUsuarioComponent,
    RegistroTiendaComponent,
    NavBarComponent,
    FooterComponent,
    ProductoTarjetaComponent,
    RegistroComponent,
    CategoriasComponent,
    PerfilTiendaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
