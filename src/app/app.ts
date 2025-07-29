import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';


@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculator');
  constructor(private auth: Auth){}

  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  onLogout(){
    this.auth.logout();
  }
}
