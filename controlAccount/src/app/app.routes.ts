// app.routes.ts or app-routing.module.ts
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // optional: redirect root to /users
  { path: '**', redirectTo: '/users' } // optional: wildcard fallback
];