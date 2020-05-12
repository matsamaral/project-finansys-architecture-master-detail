import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    // Shared components
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,

    // Shared modules
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent
  ]
})
export class SharedModule { }
