import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerUserData = { email: '', password: '' };
  constructor(private authService: AuthService, private _router: Router) {}

  async registerUser() {
    console.log(this.registerUserData);
    try {
      let result = await this.authService.registerUser(this.registerUserData);
      console.log(result);

      localStorage.setItem('token', result.token);
      this._router.navigate(['/special']);
    } catch (error) {
      console.log(error);
    }
  }
}
