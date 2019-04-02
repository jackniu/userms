import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { User } from "../../models/User";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user:User = {
    name:"",
    email:"",
    phone:"",
    balance:0
  }

  disableBalanceOnAdd:boolean = true;
  
  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public userService:UserService
  ) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value:User,valid:boolean}) {
    // console.log(value);
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      console.log("Verification failed");
      this.flashMessagesService.show("Please input right information",{cssClass:"alert-danger",timeout:6000});
      this.router.navigate(['add-user']);
    } else {
      console.log("Successful verification");
      this.userService.newUser(value).subscribe(user => {
        this.flashMessagesService.show("Added successful!",{cssClass:"alert-success",timeout:2000});
        this.router.navigate(['/']);
      })      
    }    
  }

}
