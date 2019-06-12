import {NgModule} from '@angular/core';
import {CrudTableComponent} from './components/crud-table/crud-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDividerModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import {CovalentCommonModule, CovalentLayoutModule} from '@covalent/core';
import {RangularCommonModule} from 'rangular-common';
import {AgGridModule} from 'ag-grid-angular';
import {RangularMaterialModule} from 'rangular-material';
import {CheckboxCellComponent} from './components/checkbox-cell/checkbox-cell.component';

const COMPONENTS = [CrudTableComponent, CheckboxCellComponent];

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
    MatCheckboxModule,
    MatCardModule,
    MatTooltipModule,
    CovalentLayoutModule,
    CovalentCommonModule,
    RangularCommonModule,
    RangularMaterialModule,
    AgGridModule.withComponents([CheckboxCellComponent])
  ],
})
export class RangularCrudModule {
}
