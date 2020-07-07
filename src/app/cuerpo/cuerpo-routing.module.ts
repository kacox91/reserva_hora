import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CuerpoComponent} from 'src/app/cuerpo/cuerpo.component';
import {clienteComponent} from 'src/app/cuerpo/cliente/cliente.component';
import {ListasComponent} from 'src/app/cuerpo/listas/listas.component';
import {clienteperfilComponent} from 'src/app/cuerpo/clienteperfil/clienteperfil.component';
import { DerivacionComponent } from './derivacion/derivacion.component';
import { ReunionComponent } from './reunion/reunion.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', 
    children:[
      {path: 'cliente', component:clienteComponent},
      {path: 'cliente/:id', component:clienteperfilComponent,},
      {path: 'agendadas', component:clienteComponent},
      {path: 'horas/:id', component:ReunionComponent},
      {path: 'agendar', component:ReunionComponent},
      {path: 'derivaciones', component:clienteComponent},
      {path: 'derivaciones/:id', component:DerivacionComponent},
      {path: 'derivar', component:DerivacionComponent},
      {path: 'calendario', component:clienteComponent}
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuerpoRoutingModule { }
export const routecomponent = [
  CuerpoComponent,clienteComponent,ListasComponent,clienteperfilComponent,DerivacionComponent,ReunionComponent]
export const providerroute=[]


