import { AuthenticationService } from './../../_services/authentication.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {User} from 'src/app/_models/user'
import { Router } from '@angular/router';



@Component({
  selector: 'app-barrasuperior',
  templateUrl: './barrasuperior.component.html',
  styleUrls: ['./barrasuperior.component.css']
})
export class BarrasuperiorComponent implements OnInit {
  @Output() enviar = new EventEmitter<boolean>();
  private loggedIn: boolean;
  public on:boolean;

  constructor(public router: Router, private authenticationService: AuthenticationService){}

  user: User;
  


 
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(); 
    
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
  opensalir(){
    if(this.on == false)
    {
      this.on = true;
    }
    else
    {
      this.on = false;
    }
  }
  send(msg:boolean){
    this.enviar.emit(msg)
  }
  click(){
    this.send(true)
  }
}
