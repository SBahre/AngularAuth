import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  async loginUser() {
    console.log(this.loginUserData);
    try {
      let result = await this._auth.loginUser(this.loginUserData);
      console.log(result);
      localStorage.setItem('token', result.token);
      this._router.navigate(['/special']);
    } catch (error) {
      console.log(error);
    }
  }
}
