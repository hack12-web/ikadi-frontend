import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"",
    canActivate: [AuthGuardGuard],
    component: AppComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"auth/login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
