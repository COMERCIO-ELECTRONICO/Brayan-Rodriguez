import { CrearPokemonesComponent } from './pokemones/crear-pokemones/crear-pokemones.component';
import { EditarPokemonesComponent } from './editar-pokemones/editar-pokemones.component';
import { NoEncontradoComponent } from './../../../rutas-angular/src/app/inicio/no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';
import { PokemonNoEncontradoComponent } from './inicioPokemon/pokemon-no-encontrado/pokemon-no-encontrado.component';
import { HomePokemonComponent } from './inicioPokemon/home-pokemon/home-pokemon.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
/////RUTAS/////
const rutas: Routes = [
    {
        path:'home',
        component: HomePokemonComponent
    },
    {
        path:'editar',
        component: EditarPokemonesComponent //va a direccionar a editarPokemones
        
    },
    {
        path:'crear',
        component: CrearPokemonesComponent //va a direccionar a editarPokemones
        
    },
    {
        path:'pokemones',
        loadChildren: ()=>import('./pokemones/pokemones.module')
        .then(pokemon=>pokemon.PokemonesModule)
    
    },
    {
        //ruta por default
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {  //cuando no encuentra la pagina
        path:'**',
        component: PokemonNoEncontradoComponent
    },
]
@NgModule({
    imports: [RouterModule
    .forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent{

}