import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'ran-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxCellComponent implements ICellRendererAngularComp {

  private params: any;

  checked = false;

  agInit(params: any): void {
    this.params = params;
    this.checked = this.params.value === true;
  }

  refresh(params: any): boolean {
    return false;
  }

}
