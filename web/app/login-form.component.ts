/**
 * Created by Nikola on 8/16/2016.
 */
import { Component } from '@angular/core';

import { KorisnikAplikacije }    from './korisnikAplikacije';

@Component({
    selector: 'login-form',
    //template: `login form component...`
    templateUrl: 'app/login-form.component.html'
})
export class LoginFormComponent {
    funkcije = ['Vlasnik', 'Konobar', 'Sanker'];
    model = new KorisnikAplikacije('Gazda Jezda', 'gazda');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
