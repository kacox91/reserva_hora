import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,routecomponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {LoggedModule} from 'src/app/logged/logged.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule,MatTableModule} from '@angular/material';
import {providerroute} from 'src/app/cuerpo/cuerpo-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

@NgModule({
  declarations: [
    AppComponent, routecomponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    LoggedModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    providerroute,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function provideConfig() {
  return config;
}
