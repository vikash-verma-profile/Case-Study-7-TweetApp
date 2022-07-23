import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    var userDataObject={
      email:this.registerUserData.email,
      password:this.registerUserData.password
    }
  
    this._auth.registerUser(userDataObject).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['tweet'])
    },
      err => console.log(err));
  }

}