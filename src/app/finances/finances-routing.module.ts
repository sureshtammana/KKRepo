import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";

import { FinancesListComponent } from "./finances-list/finances-list.component";
import { FinancesDetailComponent } from "./finances-detail/finances-detail.component";
import { FiancesAddComponent } from "./fiances-add/fiances-add.component";

const routes: Routes = [
  {
    path: '',
    component: FinancesListComponent,
    data: { roles: [] }
  },
  {
    path: 'detail/:id',
    component: FinancesDetailComponent, 
    data: { roles: [] }
  },
  {
    path: 'add',
    component: FiancesAddComponent, 
    data: { roles: [] }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FinancesRoutingModule { }
