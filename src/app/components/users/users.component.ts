import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: any;
  totalOwned: number;

  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      this.getTotalOwned();
      // console.log(this.totalOwned); 

    })
  }

  getTotalOwned() {
    let total = 0;
    for (let i=0; i< this.users.length; i++) {
      total += parseFloat(this.users[i].balance);
    }

    this.totalOwned = total;
  }

}
