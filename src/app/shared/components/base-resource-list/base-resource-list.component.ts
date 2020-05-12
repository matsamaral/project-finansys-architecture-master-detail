import { OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().pipe(
      take(1)
    ).subscribe(
      (resources) => this.resources = resources.sort((a, b) => b.id - a.id),
      () => alert('Erro ao carregar lista')
    );
  }

  deleteResource(id: number) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.resourceService.delete(id).pipe(
        take(1)
      ).subscribe(
        () => this.resources = this.resources.filter(element => +element.id !== +id),
        () => alert('Erro ao tentar excluir a item!')
      );
    }
  }

}
