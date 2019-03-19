import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users = [];
  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users =>{
      this.users;
      console.log(this.users);
      
    })
  }

}
