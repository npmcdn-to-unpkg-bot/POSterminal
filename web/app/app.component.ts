import { Component }          from '@angular/core';
//import { ZaposleniComponent } from './Zaposleni.component';
//import { ZaposleniService } from './Zaposleni.service';

@Component({
  selector: 'my-app',
  template: `   
             <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <!--
            <a href="#"><a routerLink="/zaposleni" routerLinkActive="active">Zaposleni</a></a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            -->
            <nav>
              <a routerLink="/login" routerLinkActive="active">Login</a>
              <a routerLink="/zaposleni" routerLinkActive="active">Zaposleni</a>
              <a routerLink="/artikli" routerLinkActive="active">Artikli</a>
              <a routerLink="/registration" routerLinkActive="active">Registracija</a>
          
              <br/>
              <!-- <a routerLink="/pocetna" routerLinkActive="active">Pocetna</a> -->
            </nav>
          
            <!--
            <div class="chip">
              <img src="../img/img_avatar.png" alt="Person" width="96" height="96">
              John Doe
              <!-- <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span> -->
            <!--</div> -->
          
           </div>         
                 <router-outlet></router-outlet>`
  /*
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/crisis-center/admin" routerLinkActive="active">Crisis Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `*/
})
export class AppComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/