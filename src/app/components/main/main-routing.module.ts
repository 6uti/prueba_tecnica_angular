import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearClienteComponent } from './registro/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './registro/actualizar-cliente/actualizar-cliente.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'actualizar-cliente', component: ActualizarClienteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
