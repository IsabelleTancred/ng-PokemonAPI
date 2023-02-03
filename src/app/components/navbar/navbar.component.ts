import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

import { UserService } from 'src/app/services/user.service';
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  get user (): User | undefined{
    return this.userService.user
  }

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly userService: UserService,
  ) { }

  ngOnInit(): void {}
  


public handleLogout(): void {
  this.loginService.logout();
  this.router.navigateByUrl("/landing");
}
}
