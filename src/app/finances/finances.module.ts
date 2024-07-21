import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from '@angular/common';

import { FiancesAddComponent } from './fiances-add/fiances-add.component';
import { FinancesDetailComponent } from './finances-detail/finances-detail.component';
import { FinancesListComponent } from './finances-list/finances-list.component';
import { FinancesRoutingModule } from './finances-routing.module';

import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatNativeDateModule} from '@angular/material/core';




@NgModule({
  declarations: [
    FiancesAddComponent,
    FinancesDetailComponent,
    FinancesListComponent,
    FinancesRoutingModule
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    ReactiveFormsModule,  SharedModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgpImagePickerModule,
    MatNativeDateModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FinancesModule { }
