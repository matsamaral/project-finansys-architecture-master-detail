import { NgModule } from '@angular/core';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    EntryListComponent,
    EntryFormComponent
  ],
  imports: [
    CalendarModule,
    IMaskModule,
    SharedModule,
    EntriesRoutingModule
  ]
})
export class EntriesModule { }
