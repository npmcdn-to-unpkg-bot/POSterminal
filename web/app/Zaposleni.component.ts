/**
 * Created by Ancha on 8/11/2016.
 */
import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
//import { Router }            from '@angular/router';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from '@angular/http';

import { Zaposleni }                from './Zaposleni';

import { ZaposleniService }         from './Zaposleni.service';
import { Promise } from 'es6-promise';
//import { HeroDetailComponent } from './hero-detail.component';


@Component({
    selector: 'zaposleni',
    //changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
            <div>  <p>Prikazi zaposlene je (true/false): {{prikaziZaposlene}} </p> </div>
            <div *ngIf="prikaziZaposlene">
                <h2>Lista zaposlenih</h2>
                <!-- <span> {{zaposleni}} </span> -->
                <ul class = "items">
                <li *ngFor="let zp of zaposleni" (click)="onSelect(zp)" [class.selected]="zp === selectedZap">
                  <span>
                    <span class="badge">{{zp.idZaposleni}}</span> {{zp.ime}} {{zp.prezime}}
                 </span>
                </li>
              </ul>

            </div>
                                  
                `,

   // templateUrl: 'app/Zaposleni.component.html',
    //styleUrls:  ['styles.css'],
    //directives: [HeroDetailComponent]
    providers: [HTTP_PROVIDERS, ZaposleniService]
})
export class ZaposleniComponent implements OnInit {

    @Input() zaposleni: Array<Zaposleni>;
    selectedZap: Zaposleni;
    error: any;
    prikaziZaposlene : boolean;

    constructor(
        //private router: Router,
        private zaposleniService: ZaposleniService, private ref: ChangeDetectorRef) {
        ref.detach();
        this.zaposleni= [new Zaposleni(1, "anci", "mitrovic"), new Zaposleni(2, "dichvi", "vidich")];
        this.selectedZap = undefined;
        this.prikaziZaposlene = true;
        this.getZaposleni();
    }

    ispisiZaposlene(){
        var z:any;
        console.log("Ispisujem zaposlene: \n");
        for(z in this.zaposleni)
            console.log(this.zaposleni[z]);
        console.log("\n\n");
        console.log("prikaziZaposlene: " + this.prikaziZaposlene);
        console.log("\n\n");
    }

    public setZaposleni(zaposleni: Zaposleni[]) {
        this.zaposleni = zaposleni;
    }

    getZaposleni() {
        console.log("getZaposleni() iz komponente\n\n");
        /*this.zaposleniService
            .getZaposleni()
            .then(zaposleni => this.zaposleni = zaposleni)
            .catch(error => this.error = error);*/
        var obj: any;
        this.zaposleniService
            .getZaposleni().then(zap =>  {
                this.zaposleni = [];
                this.zaposleni = zap;
                this.prikaziZaposlene = true;
                console.log("Izvrsava se callback za resolve - promise je uspeo");
                this.ref.detectChanges();
            }).catch(function (error) {
                console.log("Zaposleni komponenta error - promise nije uspeo " + error);
            });
    }//end getZaposleni()

    ngOnInit() {
        console.log("onInit()\n\n");
        this.getZaposleni();
    } //end ngOnInit()

        /*
        console.log("getZaposleni(): " + obj);

        var elem: any;

        for(elem in obj)
            for(var property in elem) {
                alert(property + "=" + elem[property]);
            }*/
        //console.log(this.zaposleni);


    getArtikli() {
        //this.prikaziZaposlene = true;
        /*this.zaposleniService
         .getZaposleni()
         .then(zaposleni => this.zaposleni = zaposleni)
         .catch(error => this.error = error);*/
        var obj: any;
        obj = this.zaposleniService
            .getArtikli();
        //this.zaposleni = obj as Zaposleni[];
        /*
         console.log("getZaposleni(): " + obj);

         var elem: any;

         for(elem in obj)
         for(var property in elem) {
         alert(property + "=" + elem[property]);
         }*/
        //console.log(this.zaposleni);
    }

    onSelect(zap: Zaposleni) {
        this.selectedZap = zap;
        //this.addingHero = false;
    }
  /*  heroes: Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    */
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */