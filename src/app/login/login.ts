import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginCredencials } from '../models/login-credencials.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { Card } from '../shared/card/card';
import { MessageBox } from '../message-box/message-box';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Card, MessageBox],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  @Output() check = new EventEmitter<LoginCredencials>();
  constructor(
    private router: Router,
    private loginService: LoginService,
    private auth: Auth
  ) {}

  email = '';
  password = '';

  title: 'Success' | 'Error' = 'Success';
  message = '';

  onSubmit() {
    //send the credencials to loginService and check them
    const isLoggedIn = this.loginService.login({
      email: this.email,
      password: this.password,
    });

    //success
    if (isLoggedIn) {
      //store the user
      const user = this.auth.getUser();
      //redirect him on a page based on his role
      if (user?.role === 'user') {
        this.router.navigate(['/playground'], {
          state: {
            title: 'Success',
            message: 'Congratulations! User logged in successfully.',
          },
        });
      } else if (user?.role === 'admin') {
        this.router.navigate(['/about'], {
          state: {
            title: 'Success',
            message: 'Congratulations! User logged in successfully.',
          },
        });
      }
    } else {
      this.title = 'Error';
      this.message = 'Invalid email or password.';
    }
  }
}
