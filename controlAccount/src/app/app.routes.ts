// app.routes.ts or app-routing.module.ts
import { Routes } from '@angular/router';
import { AccountsComponent } from './features/accounts/accounts.component';
import { VehiclesComponent } from './features/vehicles/components/vehicles/vehicles.component';


export const routes: Routes = [
  { path: 'account', component: AccountsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' }, // optional: redirect root to /users
  { path: '**', redirectTo: '/users' } // optional: wildcard fallback
];