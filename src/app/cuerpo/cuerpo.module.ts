import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CuerpoRoutingModule,routecomponent,providerroute} from 'src/app/cuerpo/cuerpo-routing.module';
import {MatTableModule} from '@angular/material';




@NgModule({
  declarations: [routecomponent,],
    
  providers:[providerroute],
  imports: [
    CommonModule,
    CuerpoRoutingModule,
    MatTableModule,
  ]
})
export class CuerpoModule { }
