/**
 * Created by Ancha on 8/11/2016.
 */
export class Zaposleni {
    idZaposleni: number;
    ime: string;
    prezime: string;
/*    datumRodjenja: string;
    funkcija: string;
    email: string;
    brojTelefonaKucni: string;
    brojTelefonaMobilni: string;
    datumZaposlenja: string;
    datumPrekidaRadnogOdnosa: string;
    pol: string;*/

    public toString() {
        return "ID: " + this.idZaposleni + ", ime: " + this.ime + " " + this.prezime;
    }
/*
    public setID(ID : number){
        this.idZaposleni = ID;
    }
    public setIme(ime : string){
        this.ime = ime;
    }
    public setPrezime(prezime : string){
        this.prezime = prezime;
    }
*/
}