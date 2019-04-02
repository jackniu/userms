import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id:string;
  user:object;
  hasBalance:boolean = true;
  showBalanceUpdateInput:boolean = false;
  constructor(
    public route:ActivatedRoute,
    public userService:UserService,
    public flashMessagesService:FlashMessagesService,
    public router:Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      // console.log(user);

      if (user.balance > 0) {
        this.hasBalance = false;
      }
    })
  }

  updateBalance(id:string) {
    this.userService.updateUser(this.id, this.user).subscribe(user => {
      this.flashMessagesService.show('Balance has been updated',{cssClass:'alert-success', timeout:2000});
      this.showBalanceUpdateInput = false;
      this.router.navigate(['/user/'+this.id]);
    })
  }

  onDeleteClick() {
    if (confirm('Are you sure to delete this user information?')) {
      this.userService.deleteUser(this.id).subscribe(user => {
        this.flashMessagesService.show('User has been deleted',{cssClass:'alert-success', timeout:2000});
        this.router.navigate(['/']);
      })
    }
  }
}
