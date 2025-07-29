import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private tokenKey = 'auth_token';

  // Create amock JWT token (simple base64)
  private createFakeToken(payload: User): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify(payload));
    const fakeSignature = btoa('mock-signature');
    return `${header}.${body}.${fakeSignature}`;
  }

  login(payload: User){
    const token = this.createFakeToken(payload); //create the token
    localStorage.setItem(this.tokenKey, token); //store the token of logged in user
  }

  getUser(): User | null {
    const token = this.getToken(); //get the token from localStorage
    if (!token) { return null; } 

     try {
      const payload = token.split('.')[1];//decode the token
      return JSON.parse(atob(payload)) as User; //return the user object
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getUser(); //!! convert the result to true or false + check if user exists
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); //remove user from local storage
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  hasRole(role: string): boolean {
    return this.getUser()?.role === role; //check if role matches to given role for authorization
  }
}
