import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id:string;
  user:object;
  constructor(
    public route:ActivatedRoute,
    public userService:UserService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user);
      
    })
  }

}
