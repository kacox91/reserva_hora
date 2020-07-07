import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  on: boolean = false;
  recibo:boolean = false;
  path:string;

  constructor() { }
  cambiaron(confirmation: boolean){
    this.recibo = confirmation;
    if(this.on == true){
      this.on = false;
    }
    else{
      this.on = true;
    }
  }
  cargar()
  {
    if(this.on == true){
      this.on = false;
    }
    else{
      this.on = true;
    }
  }
  ocultar(){
    this.on = false;
  }
  ocultar2(confirmar: boolean){
    this.on = false;
  }
  ngOnInit() {
  }
}
