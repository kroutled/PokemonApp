import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly APIUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonByName(PokemonName: string): Observable<any> {
    console.log('Request is sent with name: ', PokemonName);
    return this.http.get(this.APIUrl + PokemonName);
  }
}
