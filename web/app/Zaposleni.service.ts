///<reference path="../node_modules/rxjs/add/operator/catch.d.ts"/>
///<reference path="../../node_modules/jquery.d.ts" />
/// <reference path="typings/index.d.ts" />
///<reference path="../node_modules/es6-promise/es6-promise.d.ts"/>
/**
 * Created by Ancha on 8/11/2016.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers, HTTP_PROVIDERS, URLSearchParams} from '@angular/http';

import { Promise } from 'es6-promise';
//import Promise from "es6-promise/lib/es6-promise";

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

import { Zaposleni } from './Zaposleni';

@Injectable()
export class ZaposleniService {

    private zaposleniUrl = 'http://localhost:9090/rest/zaposleni';  // URL to web api

    //var Promise = require('es6-promise').Promise;

    constructor(private http: Http) { }

    getZaposleni ()/*: Observable<Zaposleni[]>*/ {
        //console.log("getZaposleni u service: "+this.http.get(this.zaposleniUrl));
        //return this.http.get(this.zaposleniUrl).map(this.extractData).catch(this.handleError);

        var p = new Promise<Zaposleni[]>((resolve, reject) => {
            $.ajax({
                dataType: "json",
                //headers: {"Access-Control-Allow-Origin" : "*"},
                url: this.zaposleniUrl,
                //data: this.zaposleniUrl,
                success: function(zap) {
                    console.log( "Success! :)))) " + JSON.stringify(zap));
                    //zap = JSON.parse(zap);
                    var zaposleniPom : Zaposleni[] = [];
                    var pom:any;
                    for (var i = 0; i < zap.length; i++) {
                        var object: any = zap[i];
                        var zPom: Zaposleni = new Zaposleni();// = <Zaposleni> object;

                        zPom.idZaposleni = object["idZaposleni"];
                        zPom.ime = object["ime"];
                        zPom.prezime = object["prezime"];
                        console.log("zPom: \n" + zPom);
                        /*for (var property in object) {
                         console.log('item ' + i + ': ' + property + '=' + object[property]);
                         //zPom.setID();
                         }*/
                        zaposleniPom.push(zPom);
                    }
                    return resolve(zaposleniPom);
                    //return JSON.stringify(response);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Status: " + textStatus);
                    console.log("Error: " + errorThrown);
                    return reject(errorThrown);
                }
            })
        });
        return p;
           // .then(response => JSON.parse(response) as Zaposleni[]);

    /*    $.ajax({
            dataType: "json",
            //headers: {"Access-Control-Allow-Origin" : "*"},
            url: this.zaposleniUrl,
            //data: this.zaposleniUrl,
            success: function(response) {
                console.log( "Success! :)))) " + JSON.stringify(response));
                return JSON.stringify(response);
            }
        });
*/
        /*
         .toPromise()
         .then(//response => response.json().data as Zaposleni[])
         function(response){

         var niz : Zaposleni[];
         niz = response.json().data as Zaposleni[];
         console.log("Response from ts with as Zaposleni[]: " + (response.json().data as Zaposleni[]));
         console.log("Response from ts: " + response.json().data);
         console.log("Response from ts without json and data: " + response.json().data);
         return niz;
         })
         .catch(function(resp) {
         console.log("Error: " + resp);
         });*/
    }//end getZaposleni()

    getArtikli ()/*: Observable<Zaposleni[]>*/ {
        //console.log("getZaposleni u service: "+this.http.get(this.zaposleniUrl));
        //return this.http.get(this.zaposleniUrl).map(this.extractData).catch(this.handleError);

        $.ajax({
            dataType: "json",
            //headers: {"Access-Control-Allow-Origin" : "*"},
            url: "http://localhost:9090/rest/artikli",
            //data: this.zaposleniUrl,
            success: function (response) {
                console.log("Success! :)))) " + JSON.stringify(response));
                return JSON.stringify(response);
            }
        });
    }//end getArtikli

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


/*
    getHero(id: number) {
        return this.getZaposleni()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    save(hero: Hero): Promise<Hero>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Hero
    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    */
}



/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */