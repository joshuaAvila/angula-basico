import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes : string[]= ['SpiderMan', 'IronMan','Capitan America', 'Thor','Hulk','PantheraNegra'];
  heroeBorrado: string= '' ;
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift();
   
  }
}
