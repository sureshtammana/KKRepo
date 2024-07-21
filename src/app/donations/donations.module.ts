import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { CommonModule } from '@angular/common';
import { DonateDetailComponent } from './donate-detail/donate-detail.component';
import { DonateFoodComponent } from './donate-food/donate-food.component';
import { DonateListComponent } from './donate-list/donate-list.component';
import { DonationsRoutingModule } from './donations-routing.module';

import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    DonateDetailComponent,
    DonateFoodComponent,
    DonateListComponent
  ],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    ReactiveFormsModule,  SharedModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgpImagePickerModule,
    MatNativeDateModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DonationsModule { }
