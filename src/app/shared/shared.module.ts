import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    // Shared components
    BreadCrumbComponent,

    // Shared modules
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    BreadCrumbComponent
  ]
})
export class SharedModule { }
