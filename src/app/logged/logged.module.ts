import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routecomponent,LoggedRoutingModule} from 'src/app/logged/logged-routing.module';

@NgModule({
  declarations: [routecomponent],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
