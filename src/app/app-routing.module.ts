import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

export const pagesLink = {
  loginPage: '/',
  homePage: '/home-page',
};

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home-page', component: HomePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
