import { Injectable } from '@angular/core';
import { LoginCredencials } from '../models/login-credencials.model';
import { User } from '../models/user.model';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private users: User[] = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      email: 'jasWas@example.com',
      password: '12345',
      avatar: 'user-1.jpg',
      role: 'admin',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      email: 'emTom@example.com',
      password: '12345',
      avatar: 'user-2.jpg',
      role: 'user',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      email: 'markus@example.com',
      password: '12345',
      avatar: 'user-3.jpg',
      role: 'user',
    },
    {
      id: 'u4',
      name: 'David Miller',
      email: 'david@example.com',
      password: '12345',
      avatar: 'user-4.jpg',
      role: 'user',
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      email: 'patel@example.com',
      password: '12345',
      avatar: 'user-5.jpg',
      role: 'user',
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      email: 'singh@example.com',
      password: '12345',
      avatar: 'user-6.jpg',
      role: 'admin',
    },
  ];

  constructor(private auth: Auth){}

  //check if the user has the correct credencials
  login(credencials: LoginCredencials): boolean {
    const user = this.users.find(
      (user) =>
        user.email === credencials.email &&
        user.password === credencials.password
    );

    if(user){
      this.auth.login(user); //store the token
      return true;
    }
    

    return false;
  }
}
