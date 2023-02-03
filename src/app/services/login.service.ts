import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { UserService } from "./user.service";

const { API_USER, API_KEY } = environment;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Dependency Injection, we inject HttpClient dependency to login
  constructor(
    private http: HttpClient,
    private readonly userService: UserService,) {}

  public login(username: string): Observable<User> {
    return this.checkUsername(username).pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined) {
          // User doesn't exist
          return this.createUser(username);
        }
        return of(user);
      })
    );
  }

  // Check if user exists

  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${API_USER}?username=${username}`).pipe(
      //RxJS operators
      map((response: User[]) => response.pop())
    );
  }

  // If not user create user
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: [],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    });

    return this.http.post<User>(API_USER, user, { headers });
  }

  public logout(): void {
    this.userService.user = undefined;
  }
}

