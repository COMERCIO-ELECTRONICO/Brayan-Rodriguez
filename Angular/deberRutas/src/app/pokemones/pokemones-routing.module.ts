import { ListarPokemonesComponent } from './listar-pokemones/listar-pokemones.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'listar',
    component: ListarPokemonesComponent
    //referencia al componente listar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonesRoutingModule { }
