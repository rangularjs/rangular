import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCommonModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CovalentCommonModule} from '@covalent/core/common';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {AgGridModule} from 'ag-grid-angular';
import {RangularCommonModule} from 'rangular-common';
import {RangularMaterialModule} from 'rangular-material';
import {CrudTableComponent} from './components/crud-table/crud-table.component';
import {CheckboxCellComponent} from './components/checkbox-cell/checkbox-cell.component';
import {ButtonCellComponent} from './components/button-cell/button-cell.component';

const COMPONENTS = [CrudTableComponent, CheckboxCellComponent, ButtonCellComponent];

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
    AgGridModule.withComponents([CheckboxCellComponent, ButtonCellComponent]),
  ],
})
export class RangularCrudModule {
}
