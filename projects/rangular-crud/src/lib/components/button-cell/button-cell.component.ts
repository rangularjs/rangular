import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {get, isFunction} from 'lodash';
import {isNullOrUndefined} from 'rangular-common';

@Component({
  selector: 'ran-button-cell',
  templateUrl: './button-cell.component.html',
  styleUrls: ['./button-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCellComponent implements ICellRendererAngularComp {

  params: any;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  call(e: MouseEvent) {
    e.stopPropagation();
    this.params.action(this.params.data);
  }

  isDisabled() {
    if (!isNullOrUndefined(get(this.params, 'disabled'))) {
      if (isFunction(this.params.disabled)) {
        return this.params.disabled(this.params.data);
      }
      return this.params.disabled;
    }
    return false;
  }

  getClasses() {
    if (this.isDisabled()) {
      return 'tc-grey-300';
    }
    let classes = 'tc-grey-500';
    if (!isNullOrUndefined(get(this.params, 'iconClass'))) {
      classes += ` ${this.params.iconClass}`;
    }
    return classes;
  }
}
