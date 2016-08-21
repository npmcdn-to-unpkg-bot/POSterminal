/**
 * Created by Nikola on 8/18/2016.
 */
///<reference path="../node_modules/@angular/router/index.d.ts"/>
///<reference path="../node_modules/@angular/router/testing.d.ts"/>
import { Routes, RouterModule }   from '@angular/router';
import {LoginFormComponent} from "./login-form.component";
import {ZaposleniComponent} from "./Zaposleni.component";
import {RegistrationFormComponent} from "./registration-form.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginFormComponent },

    { path: 'registration', component: RegistrationFormComponent },
    { path: 'zaposleni', component: ZaposleniComponent },
    /*,
    {
        path: 'heroes',
        component: HeroListComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: 'hero/:id', component: HeroDetailComponent },
*/
    { path: '**', component: LoginFormComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);