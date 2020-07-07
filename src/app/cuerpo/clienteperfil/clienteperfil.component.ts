import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { User } from 'src/app/_models/user';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { Horas } from 'src/app/_models/horas';
import { element } from 'protractor';
@Component({
  selector: 'app-clienteperfil',
  templateUrl: './clienteperfil.component.html',
  styleUrls: ['./clienteperfil.component.css']
})
export class clienteperfilComponent implements OnInit {
  on: boolean;
  titulo: string;
  cliente: User;
  proce: Horas[];

  constructor(private api: ApiService, private router: Router, private location: Location) {
    this.on = true;
    this.titulo = "Historial de horas";
    this.getcliente();

  }
  ngOnInit() {

  }
  horas() {
    this.on = false;
    this.titulo = "Listado de horas"
  }
  getcliente() {
    this.api.getCliente(+this.location.path().split('/')[3])
      .subscribe(cliente => {
        this.cliente = cliente
      },
      )
  }
}
