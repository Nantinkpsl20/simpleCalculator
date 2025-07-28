import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginCredencials } from '../models/login-credencials.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  @Output() check = new EventEmitter<LoginCredencials>();
  constructor(private router: Router, private loginService: LoginService) {}

  email = '';
  password = '';

  onSubmit() {
    const role = this.loginService.checkUserCredencials({email: this.email, password: this.password});

    if(role=="user"){
       this.router.navigate(['/playground']);
    }else if(role=="admin"){
       this.router.navigate(['/about']);
    }
  }


}
