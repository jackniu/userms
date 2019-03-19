import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  //@Input() users: User[];
  users = [];

  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      console.log(this.users);
    })
  }

}
