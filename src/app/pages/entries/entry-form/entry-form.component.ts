import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';
import { Category } from '../../categories/shared/category.model';
import { CategoryService } from './../../categories/shared/category.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit {

  categories: Array<Category>;

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(
    protected entryService: EntryService,
    protected injector: Injector,
    protected categoryService: CategoryService
  ) {
    super(injector, new Entry(), entryService, Entry.fromJson);
  }

  ngOnInit() {
    this.loadCategories();
    super.ngOnInit();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entry.types).map(
      ([value, text]) => {
        return {
          text,
          value
        };
      }
    );
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ['expense', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      categoryId: [null, [Validators.required]],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de novo Lançamento';
  }

  protected editionPageTitle(): string {
    const entryName = this.resource.name || '';

    return 'Editando Lançamento: ' + entryName;
  }

  private loadCategories() {
    this.categoryService.getAll().pipe(
      take(1)
    ).subscribe(
      (categories) => this.categories = categories
    );
  }
}
