import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../shared/category.service';
import { Category } from '../shared/category.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().pipe(
      take(1)
    ).subscribe(
      (categories) => this.categories = categories,
      (error) => alert('Erro ao carregar lista')
    );
  }

  deleteCategory(id: number) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(id).pipe(
        take(1)
      ).subscribe(
        () => this.categories = this.categories.filter(element => +element.id !== +id),
        () => alert('Erro ao tentar excluir a categoria!')
      );
    }
  }

}
