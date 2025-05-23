// app.routes.ts or app-routing.module.ts
import { Routes } from '@angular/router';
import { AccountsComponent } from './features/accounts/accounts.component';


export const routes: Routes = [
  { path: 'account', component: AccountsComponent },
  { path: '', redirectTo: '/account', pathMatch: 'full' }, // optional: redirect root to /users
  { path: '**', redirectTo: '/users' } // optional: wildcard fallback
];