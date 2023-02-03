import { Component } from '@angular/core';

import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { Pokemon } from "../../models/pokemon.model";


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage {

  get user(): User | undefined {
    return this.userService.user;
  }

  get pokemon(): Pokemon[] {
    if (this.userService.user) {
      return this.userService.user.pokemon;
    }
    return [];
  }

  constructor(
    private readonly userService: UserService,
  ) { }
}
