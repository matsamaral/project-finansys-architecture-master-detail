import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CategoriesRoutingModule,
    CommonModule,
  ]
})
export class CategoriesModule { }
