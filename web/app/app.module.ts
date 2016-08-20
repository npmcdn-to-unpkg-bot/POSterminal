import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {LoginFormComponent} from "./login-form.component";
import { ZaposleniComponent } from './Zaposleni.component';
import {RegistrationFormComponent} from "./registration-form.component";

import {ZaposleniService} from "./Zaposleni.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing ],
    declarations: [
        AppComponent,
        ZaposleniComponent,
        LoginFormComponent,
        RegistrationFormComponent ],
    providers: [
        appRoutingProviders,
        ZaposleniService
    ],
    bootstrap:    [ AppComponent]
})
export class AppModule { }