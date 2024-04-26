import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';// esta es la importacion que permite hacer la enrutacion en angular en una sola pagina

//En este arreglo de rutas se define cada url (ruta) de los componentes de la aplicacion
const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},//este path vacio es el home, la pagina principal y redirige a clientes. 
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent}
]  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) //aqui importa el modulo de enrutamiento y le pasa las rutas.
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
