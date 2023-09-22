import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private httpclient:HttpClient) { }

  registerUser(userdata:any)
  {
    return this.httpclient.post("http://localhost:3000/registerUser",userdata);
  }

  getAllUsers()
  {
    return this.httpclient.get("http://localhost:3000/showUsers");
  }
}
