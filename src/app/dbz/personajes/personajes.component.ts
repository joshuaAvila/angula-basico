import { Component } from '@angular/core';


import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {
  //@Input()  personaje:  Personajes[] = [];

  get personajes(){
    return this.dbzServicio.personajes;
  }

  constructor(private dbzServicio: DbzService){}
}
