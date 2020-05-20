import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonesRoutingModule } from './pokemones-routing.module';
import { ListarPokemonesComponent } from './listar-pokemones/listar-pokemones.component';
import { CrearPokemonesComponent } from './crear-pokemones/crear-pokemones.component';


@NgModule({
  declarations: [ListarPokemonesComponent, CrearPokemonesComponent],
  imports: [
    CommonModule,
    PokemonesRoutingModule
  ]
})
export class PokemonesModule { }
