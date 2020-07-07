import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { fakeAsync } from '@angular/core/testing';
import {ApiService} from 'src/app/_services/api.service' ;
import { from } from 'rxjs';

@Component({
  selector: 'app-derivacion',
  templateUrl: './derivacion.component.html',
  styleUrls: ['./derivacion.component.css']
})
export class DerivacionComponent implements OnInit {
  private route: string;
  parametro
  dvalue:string = "Seleccionar una opcion"
  nvalue:string = "Seleccionar una opcion"
  button:boolean
  nbool:boolean
  dbool:boolean
  desbool:boolean
  constructor(location: Location, router: Router, private api:ApiService) { 
    router.events.subscribe(val => {
      if(location.path().split('/')[2] == "derivaciones") {
        this.route = "Informe de Derivacion";
        this.dvalue= "algo"
        this.nvalue = "algo"
        this.button= false
        this.nbool = true
        this.dbool = true
        this.desbool = true
      }else if(location.path().split('/')[2] == "derivar") {
        this.route = "Crear Derivacion";
        this.route = "Informe de Derivacion";
        this.button= true
        this.nbool = null
        this.dbool = null
        this.desbool = null
      }
      if(location.path().split('/')[3] != null){
        this.parametro =location.path().split('/')[3];
        this.getEvento();
      }
    });
  }
  ngOnInit() {
  }
  getEvento(){
  }
}
