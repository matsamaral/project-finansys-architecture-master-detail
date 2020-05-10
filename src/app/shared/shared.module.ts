import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
