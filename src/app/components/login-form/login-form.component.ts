import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";

import { User } from "../../models/user.model";
import { LoginService } from "../../services/login.service";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public loading: boolean = false;

  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(

    private readonly loginService: LoginService
  ) { }

  public loginSubmit(loginForm: NgForm): void {
    this.loading = true;
    const { username } = loginForm.value;

    this.loginService.login(username).subscribe({
      next: (user: User) => {

        this.loading = false;
        this.login.emit();
      },
      error: () => {
      },
      complete: () => {
      },
    });
  }
}
