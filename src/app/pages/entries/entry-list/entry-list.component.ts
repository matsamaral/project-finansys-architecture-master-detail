import { Component, OnInit } from '@angular/core';

import { EntryService } from './../shared/entry.service';
import { Entry } from '../shared/entry.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().pipe(
      take(1)
    ).subscribe(
      (entries) => this.entries = entries,
      (error) => alert('Erro ao carregar lista')
    );
  }

  deleteEntry(id: number) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.entryService.delete(id).pipe(
        take(1)
      ).subscribe(
        () => this.entries = this.entries.filter(element => +element.id !== +id),
        () => alert('Erro ao tentar excluir a item!')
      );
    }
  }

}
