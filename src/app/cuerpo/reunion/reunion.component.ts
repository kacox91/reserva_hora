import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})

export class ReunionComponent implements OnInit {
  private route: string;
  agendarForm: FormGroup;
  dia;
  loading = false;
  submitted = false;
  hora;
  horaread:string
  diaread:string
  cliente:string
  lugar:string;
  numpersonas: number;
  descripcion: string;
  fecha: Date;

  button:boolean
  desbool:boolean
 
  select:string = "Seleccionar una opcion"
  constructor(location: Location, 
      router: Router,
      private formBuilder: FormBuilder,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
      
    
      
  ) { 
    router.events.subscribe(val => {
      if(location.path().split('/')[2] == "reuniones") {
        this.route = "Informe de Reunion";
        this.dia = "2018-07-22"
        this.hora = "16:00"
        this.horaread = '';
        this.diaread = '';
        this.button= false
        this.desbool = true
        this.select = "algo"
      }else if(location.path().split('/')[2] == "agendar") {
        this.route = "Agendar Reunion";
        this.dia =null
        this.hora=null
        this.horaread = null;
        this.diaread = null;
        this.button= true;
        this.desbool = null
        this.select = "Seleccionar una opcion"
      }
    });
  }


  
  ngOnInit() {
    this.agendarForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        mail: ['', Validators.required],
        phone: ['', Validators.required]
    });
}

// convenience getter for easy access to form fields
get f() { return this.agendarForm.controls; }

onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.agendarForm.invalid) {
        return;
    }
    

    this.loading = true;
    this.userService.crearHora(this.agendarForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
