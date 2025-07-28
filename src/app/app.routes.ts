import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },//Redirect to home on empty path
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'playground', loadComponent: () => import('./playground/playground').then(m => m.Playground) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'login', loadComponent: () => import('./login/login').then(m=>m.Login)},
  { path: 'not-found', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)}, // Route for the Not Found page
  { path: '**', redirectTo: 'not-found' } // Wildcard route for a 404 page
];
