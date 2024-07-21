import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActionBarComponent } from './components/action-bar/action-bar.component';



@NgModule({
  declarations: [ActionBarComponent],
  imports: [CommonModule, RouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ActionBarComponent]
})
export class SharedModule { }
