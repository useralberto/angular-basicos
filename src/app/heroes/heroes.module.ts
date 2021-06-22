import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { Heroe } from './heroe/heroe.components';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ListadoComponent,
    Heroe
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
