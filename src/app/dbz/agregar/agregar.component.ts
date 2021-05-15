import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {
  


  @Input() nuevo : Personajes= {
      nombre: '',
      poder: 0,

    }
  constructor(private dbzServicios: DbzService){}
  //@Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();
  
    agregar(){
      if(this.nuevo.nombre.trim().length === 0){return;}
      
      // this.onNuevoPersonaje.emit(this.nuevo);
      this.dbzServicios.agregarPersonaje(this.nuevo);
      this.nuevo = {
        nombre:'',
        poder: 0,
      }
    
    }

}
