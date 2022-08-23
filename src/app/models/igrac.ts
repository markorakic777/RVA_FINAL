import { NumberValueAccessor } from "@angular/forms";
import { NacionalnostComponent } from "../components/nacionalnost/nacionalnost.component";
import { Nacionalnost } from "./nacionalnost";
import { Tim } from "./tim";

export class Igrac {

    id!:number;
    ime!:string;
    prezime!:string;
    broj_reg!: string;
    datum_rodjenja!: Date;
    nacionalnost!: Nacionalnost;
    tim!: Tim;

};