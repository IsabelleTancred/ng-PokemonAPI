import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { CatchService } from "../../services/catch.service";


@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.css']
})
export class CatchButtonComponent implements OnInit {

  public loading: boolean = false;
  public isCaught: boolean = false;
  @Input() pokemonId: number = -1;

  constructor(
    private readonly catchService: CatchService,
    private readonly userService: UserService,
  ) { }

  ngOnInit(): void {
    this.isCaught = this.userService.isCaught(this.pokemonId);
  }

  public onCatchClick(): void {
    this.loading = true;
    this.catchService.addToCaught(this.pokemonId).subscribe({
      next: (user: User) => {
        this.loading = false;
        this.isCaught = this.userService.isCaught(this.pokemonId);
      },
      error: (error: HttpErrorResponse ) => {
        console.log("onCatchClick: HttpErrorResponse ", error)
        this.loading = false;
      },
      complete: () => {},
    });
  }
}
