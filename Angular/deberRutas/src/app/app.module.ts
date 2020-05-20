import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePokemonComponent } from './inicioPokemon/home-pokemon/home-pokemon.component';
import { PokemonNoEncontradoComponent } from './inicioPokemon/pokemon-no-encontrado/pokemon-no-encontrado.component';
import {AppRoutesComponent} from './app.routes'
import { PokemonesModule } from './pokemones/pokemones.module';
import { EditarPokemonesComponent } from './editar-pokemones/editar-pokemones.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePokemonComponent,
    PokemonNoEncontradoComponent,
    EditarPokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesComponent,
    PokemonesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
