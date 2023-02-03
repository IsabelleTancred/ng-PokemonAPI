import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

import { environment } from "../../environments/environment";
import { User } from "../models/user.model";
import { Pokemon } from "../models/pokemon.model";
import { UserService } from "./user.service";
import { PokemonCatalogueService } from "./pokemon-catalogue.service";


const { API_USER, API_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class CatchService {

  constructor(
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService,
    private readonly http: HttpClient,
  ) {}

  public addToCaught(pokemonId: number): Observable<User> {
    if (!this.userService.user) {
      throw new Error("addToCaught: Can't catch, user does not exist!");
    }

    const user: User = this.userService.user;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonById(pokemonId);

    if (!pokemon) {
      throw new Error("addToCaught: No pokemon with ID: " + pokemonId);
    }

    if (this.userService.isCaught(pokemonId)) {
      this.userService.removeFromCaught(pokemonId);
    } else {
      this.userService.addToCaught(pokemon);
    }

    const headers = new HttpHeaders({
      "content-type": "application/json",
      "x-api-key": API_KEY,
    });

    return this.http.patch<User>(
      API_USER + "/" + this.userService.user.id,
      { pokemon: [...user.pokemon ] },
      { headers }
    ).pipe(
      tap((updatedUser: User) => { this.userService.user = updatedUser })
    );
  }
}
