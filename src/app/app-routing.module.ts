import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { FirstHomeComponent } from './first-home/first-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home/home.component';

import { DonateFoodComponent } from './donations/donate-food/donate-food.component';
import { DonateDetailComponent } from './donations/donate-detail/donate-detail.component';
import { DonateListComponent } from './donations/donate-list/donate-list.component';

import { RequestFoodComponent } from './requests/request-food/request-food.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestListComponent } from './requests/request-list/request-list.component';

import { FiancesAddComponent } from './finances/fiances-add/fiances-add.component';
import { FinancesDetailComponent } from './finances/finances-detail/finances-detail.component';
import { FinancesListComponent } from './finances/finances-list/finances-list.component';

import { AuthGuard } from "./auth/auth.guard";



const routes: Routes = [
  {
    path: "",
    component: FirstHomeComponent
  },
  {
    path: "contactus",
    component: ContactUsComponent
  },  
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "donations/food",
    component: DonateFoodComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "donations",
    component: DonateListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "donations/detail",
    component: DonateDetailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "requests/food",
    component: RequestFoodComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "requests",
    component: RequestListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "requests/detail",
    component: RequestDetailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "finances/add",
    component: FiancesAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "finances",
    component: FinancesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "finances/detail/:id",
    component: FinancesDetailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutUSComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
