import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestFoodComponent } from './request-food/request-food.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  {
    path: '',
    component: RequestListComponent, 
    data: { roles: [] }
  },
  {
    path: 'food',
    component: RequestFoodComponent, 
    data: { roles: [] }
  },
  {
    path: ':id',
    component: RequestDetailComponent, 
    data: { roles: [] }
  },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
