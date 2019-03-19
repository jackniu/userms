import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, pipe, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable()
export class UserService {
  private url = 'http://localhost:3000';

  // users: [];
  constructor(
    public http:HttpClient
  ) { }

  // getUsers() {
  //   return this.http.get("http://localhost:3000/users")
  //     .map(res => res.json());
  // }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`).pipe(
      
    );
  }
}
