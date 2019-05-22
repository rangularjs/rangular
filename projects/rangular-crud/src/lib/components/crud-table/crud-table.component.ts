import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseEntity} from 'rangular-common';
import {map} from 'lodash';
import {ColumnModel} from '../../models/column.model';
import {LOCALE_TEXT} from '../../utils';

@Component({
  selector: 'ran-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudTableComponent {

  @Input() items: BaseEntity[];
  @Input() type: string;
  @Input() columns: ColumnModel[];

  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter<BaseEntity>();
  @Output() remove = new EventEmitter<number[]>();

  gridApi: any;
  selectedRows: any[] = [];

  onGridReady(e: any) {
    this.gridApi = e.api;
    e.api.sizeColumnsToFit();
  }

  localeTextFunc(key, defaultValue) {
    const value = LOCALE_TEXT[key];
    if (value) {
      return value;
    }
    return defaultValue;
  }

  getRowNodeId(item: BaseEntity) {
    return item.id;
  }

  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
  }

  onDeleteClicked() {
    const ids = map(this.selectedRows, 'id');
    this.remove.emit(ids);
  }


}
