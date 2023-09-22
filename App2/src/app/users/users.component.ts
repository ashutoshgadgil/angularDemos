import { Component } from '@angular/core';
import { RegisteruserService } from '../registeruser.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:any=[];

  constructor(private us:RegisteruserService)
  {

  }

  ngOnInit()
  {
    this.us.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }
}
