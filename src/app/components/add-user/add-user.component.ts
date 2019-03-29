import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { User } from "../../models/User";

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
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value:User,valid:boolean}) {
    // console.log(value);
    if (!valid) {
      console.log("Verification failed");
      this.flashMessagesService.show("Please input right information",{cssClass:"alert-danger",timeout:6000});
    } else {
      console.log("Successful verification");
    }
    
  }

}
