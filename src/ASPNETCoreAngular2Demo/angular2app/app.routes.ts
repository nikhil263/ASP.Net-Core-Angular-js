import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthenticationGuard } from './guards/authenticationGuard';
import { CanDeactivateGuard } from './guards/canDeactivateGuard';
import { CanLoadGuard } from './guards/CanLoadGuard';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthenticationGuard],
    canDeactivate: [CanDeactivateGuard],
    canLoad: [CanLoadGuard]
  }
];