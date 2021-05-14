import { NgModule } from "@angular/core";
import { contadorComponent } from './contadores/contador.component';



@NgModule({
    declarations:[
        contadorComponent
    ],
    exports:[
        contadorComponent
    ]
})

export class ContadorModule{}