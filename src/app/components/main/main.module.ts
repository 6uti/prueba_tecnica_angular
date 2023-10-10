import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SharedModule } from '../shared/shared.module';
import { CrearClienteComponent } from './registro/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './registro/actualizar-cliente/actualizar-cliente.component';


@NgModule({
  declarations: [
    MainComponent,
    InicioComponent,
    NavbarComponent,
    RegistroComponent,
    ReportesComponent,
    CrearClienteComponent,
    ActualizarClienteComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
