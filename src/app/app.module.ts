import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotacionesComponent } from './screens/votaciones/votaciones.component';
import { LoginComponent } from './screens/login/login.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { ProductoComponent } from './screens/producto/producto.component';
import { PrincipalComponent } from './screens/principal/principal.component';
import { RegistroTiendaComponent } from './component/registro-tienda/registro-tienda.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductoTarjetaComponent } from './component/producto-tarjeta/producto-tarjeta.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { CategoriasComponent } from './screens/categorias/categorias.component';
import { PerfilTiendaComponent } from './screens/perfil-tienda/perfil-tienda.component';
import { ProductformComponent } from './component/productform/productform.component';
import { FormsModule } from '@angular/forms';
import { VistaProductoComponent } from './screens/vista-producto/vista-producto.component';
import { PrivateComponent } from './screens/private/private.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTiendaComponent } from './component/formCrearTienda/form-tienda/form-tienda.component';
import { TiendaCardComponent } from './component/tienda-card/tienda-card.component';
import { FormUserComponent } from './component/form-user/form-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuscardorPipe } from './pipes/buscardor.pipe';
import { VistaPublicTiendaComponent } from './screens/vista-public-tienda/vista-public-tienda.component';
import { AddProductoComponent } from './component/add-producto/add-producto.component';
import { VistaAdminComponent } from './admin/vista-admin/vista-admin.component';
import { EditarUserComponent } from './admin/editar-user/editar-user.component';
import { AboutComponent } from './screens/about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    VotacionesComponent,
    LoginComponent,
    TiendaComponent,
    ProductoComponent,
    PrincipalComponent,
    RegistroTiendaComponent,
    NavBarComponent,
    FooterComponent,
    ProductoTarjetaComponent,
    RegistroComponent,
    CategoriasComponent,
    PerfilTiendaComponent,
    ProductformComponent,
    VistaProductoComponent,
    PrivateComponent,
    FormTiendaComponent,
    TiendaCardComponent,
    FormUserComponent,
    PageNotFoundComponent,
    BuscardorPipe,
    VistaPublicTiendaComponent,
    AddProductoComponent,
    VistaAdminComponent,
    EditarUserComponent,
    AboutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,




  ],
  providers: [
    AuthGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
