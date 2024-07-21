import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { CommonModule } from '@angular/common';
import { RequestFoodComponent } from './request-food/request-food.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestsRoutingModule } from './requests-routing.module';

import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    RequestFoodComponent,
    RequestDetailComponent,
    RequestListComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    ReactiveFormsModule,  SharedModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgpImagePickerModule,
    MatNativeDateModule    
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RequestsModule { }
