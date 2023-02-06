import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})

export class LandingPage{
  get user(): User | undefined {
    return this.userService.user
  }

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,) { }
 handleLogin(): void {
  this.router.navigateByUrl("/pokemon-catalogue");
 }

}
