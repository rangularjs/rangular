import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class CrudTableComponent implements OnInit {

  @Input() items: BaseEntity[];
  @Input() type: string;
  @Input() columns: ColumnModel[];
  @Input() rowHeight = 48;
  @Input() headerHeight = 48;
  @Input() rowSelection = 'multiple';
  @Input() pagination = true;
  @Input() navigateToNextCell = this.defaultNavigateToNextCell;
  @Input() addEnabled = true;
  @Input() editEnabled = true;
  @Input() removeEnabled = true;

  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter<BaseEntity>();
  @Output() remove = new EventEmitter<number[]>();
  @Output() cellKeyPress = new EventEmitter<any>();

  gridApi: any;
  selectedRows: any[] = [];

  ngOnInit() {
    this.navigateToNextCell = this.navigateToNextCell.bind(this);
  }

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

  onEdit(item: BaseEntity) {
    if (this.editEnabled) {
      this.edit.emit(item);
    }
  }

  defaultNavigateToNextCell(params) {
    let previousCell = params.previousCellDef;
    const suggestedNextCell = params.nextCellDef;

    const KEY_UP = 38;
    const KEY_DOWN = 40;
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    switch (params.key) {
      case KEY_DOWN:
        previousCell = params.previousCellDef;
        // set selected cell on current cell + 1
        this.gridApi.forEachNode((node) => {
          if (previousCell.rowIndex + 1 === node.rowIndex) {
            node.setSelected(true);
          }
        });
        return suggestedNextCell;
      case KEY_UP:
        previousCell = params.previousCellDef;
        // set selected cell on current cell - 1
        this.gridApi.forEachNode((node) => {
          if (previousCell.rowIndex - 1 === node.rowIndex) {
            node.setSelected(true);
          }
        });
        return suggestedNextCell;
      case KEY_LEFT:
      case KEY_RIGHT:
        return suggestedNextCell;
    }
  }

}
