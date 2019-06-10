import {NgModule} from '@angular/core';
import {CrudTableComponent} from './components/crud-table/crud-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatCommonModule, MatDividerModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {CovalentCommonModule, CovalentLayoutModule} from '@covalent/core';
import {RangularCommonModule} from 'rangular-common';
import {AgGridModule} from 'ag-grid-angular';
import {RangularMaterialModule} from 'rangular-material';

const COMPONENTS = [CrudTableComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCommonModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    CovalentLayoutModule,
    CovalentCommonModule,
    RangularCommonModule,
    RangularMaterialModule,
    AgGridModule.withComponents([])
  ],
})
export class RangularCrudModule {
}
