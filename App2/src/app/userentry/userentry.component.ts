import { Component } from '@angular/core';
import { RegisteruserService } from '../registeruser.service';

@Component({
  selector: 'app-userentry',
  templateUrl: './userentry.component.html',
  styleUrls: ['./userentry.component.css']
})
export class UserentryComponent {

  username:string='';
  pw1:string='';
  pw2:string='';
  message:string='';
  PW_valid:boolean=false;

  constructor(private us:RegisteruserService)
  {

  }

  registerUser(data:any)
  {
    //console.log(data);

    if(data.pw1==data.pw2)
    {
      this.us.registerUser(data).subscribe(data=>{
        //console.log("Registration successful..");
        this.message="User registered successfully...";
      });

      this.PW_valid=true;
    }
    else
    {
      this.message="Password Mismatch, Please try again!";
      this.PW_valid=false;
    } 
  }
}
