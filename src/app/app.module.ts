import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatNativeDateModule} from '@angular/material/core'
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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

import { DatePipe } from "@angular/common";

import {HttpInterceptorService  } from "./shared/services/http-interceptor.service";
import {GlobalErrorHandler  } from "./shared/services/global-error-handler";
import { AboutUSComponent } from './about-us/about-us.component';
import { FirstHomeComponent } from './first-home/first-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    DonateFoodComponent,
    DonateDetailComponent,
    DonateListComponent,
    RequestFoodComponent,
    RequestDetailComponent,
    RequestListComponent,
    FiancesAddComponent,
    FinancesDetailComponent,
    FinancesListComponent,
    AboutUSComponent,
    FirstHomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgpImagePickerModule,
    MatNativeDateModule,
    NgwWowModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
      
    }, 
    GlobalErrorHandler,
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
