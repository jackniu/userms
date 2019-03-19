import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  users: [];
  constructor(
    public http:HttpClientModule
  ) { }

  // getUsers() {
  //   return this.http.get("http://localhost:3000/users")
  //     .map(res => res.json());
  // }
  getUsers(): Observable<users[]> {
    return this.http.get<users[]>("http://localhost:3000/users").pipe(map(
      res=>res.json()
    ))
  }
}
