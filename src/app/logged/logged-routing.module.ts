import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedComponent} from 'src/app/logged/logged.component';
import {BarrasuperiorComponent} from 'src/app/logged/barrasuperior/barrasuperior.component';
import { BarralateralComponent } from './barralateral/barralateral.component';


const routes: Routes = [
  { path:  'logged', component:LoggedComponent,
    loadChildren:() => import('src/app/cuerpo/cuerpo.module').then(mod => mod.CuerpoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
export const routecomponent = [
  LoggedComponent,BarrasuperiorComponent,BarralateralComponent
]

