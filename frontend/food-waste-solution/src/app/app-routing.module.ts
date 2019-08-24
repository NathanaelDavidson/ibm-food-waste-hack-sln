import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SignupComponent } from './signup/signup.component';
import { BuyerGuard } from './buyers/buyer.guard';
import { SellerGuard } from './sellers/seller.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { UnexpectedLogoutComponent } from './unexpected-logout/unexpected-logout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'signup',
    children: [
      { path: 'success', component: SignupSuccessComponent },
      { path: '', component: SignupComponent }
    ],
    canActivateChild: [NoAuthGuard]
  },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'unexpectedlogout', component: UnexpectedLogoutComponent, canActivate: [NoAuthGuard]},
  {
    path: 'buyers',
    canLoad: [BuyerGuard],
    loadChildren: () => import('./buyers/buyers.module').then(mod => mod.BuyersModule)
  },
  {
    path: 'sellers',
    canLoad: [SellerGuard],
    loadChildren: () => import('./sellers/sellers.module').then(mod => mod.SellersModule)
  },
  { path: '', component: LandingComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
