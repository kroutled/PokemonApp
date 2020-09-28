import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonApi';
  public pokemon: Pokemon = null;

  constructor(private pokedex: PokedexService) { }

  findPokemon(pokemonName: string) {
    //TODO:
    //pass name to pokedex service
    //mapp returned json from service to pokemon model object
    //pass object to front end and display values
    this.pokedex.getPokemonByName(pokemonName.toLocaleLowerCase()).subscribe((res : Pokemon) => {
      this.pokemon = res;
    });
  }
}
