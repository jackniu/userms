import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class UserService {
  public url = 'http://localhost:3000';

  constructor(
    public http:HttpClient
  ) { }

  // NG4 Old code:
  // getUsers() {
  //   return this.http.get("http://localhost:3000/users")
  //     .map(res => res.json());
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  newUser(user:User) {
    return this.http.post<User[]>(`${this.url}/users`,user);
  }

  getUser(id:string) {
    return this.http.get(`${this.url}/users/${id}`);
  }

  updateUser(id,user) {
    return this.http.put(`${this.url}/users/${id}`,user);
  }
}