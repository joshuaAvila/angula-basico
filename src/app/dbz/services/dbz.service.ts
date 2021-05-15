import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.interface';




@Injectable()
export class DbzService{

    private _personaje: Personajes[]=[
        {
          nombre: 'Goku',
          poder: 20000,
        },
        {
          nombre: 'Vegeta',
          poder: 20000,
        }
      ];

      get personajes(): Personajes[]{
          return [...this._personaje];
      }
    constructor(){}

    agregarPersonaje(personaje: Personajes){
        this._personaje.push( personaje );
    }
}