import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import { MatListOption } from '@angular/material/list';
import {isNullOrUndefined} from 'rangular-common';
import {get, isArray, isFunction, isString, remove} from 'lodash';
import {isObservable} from 'rxjs';

@Component({
  selector: 'ran-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ItemSelectorComponent {

  @Input() selectedItems: any[];
  @Input() multiple = true;
  @Input() icon = 'chevron_left';
  @Input() acceptButton = 'انتخاب';
  @Input() searchPlaceholder = 'جستجو ...';
  @Input() showFilter = true;
  @Input() displayField: any;
  @Input() selectedFn: (obj, item) => boolean;
  @Output() itemSelected = new EventEmitter<any>();
  @Output() submitted = new EventEmitter<any[]>();
  filteredItems: any[];

  _items: any[];

  get items(): any {
    return this._items;
  }

  @Input()
  set items(values: any) {
    if (isArray(values)) {
      this.setData(values);
    } else if (isObservable(values)) {
      values.subscribe((data: any[]) => {
        this.setData(data);
        this._changeDetector.markForCheck();
      });
    }
  }

  constructor(private _changeDetector: ChangeDetectorRef) {
  }

  submit() {
    this.submitted.emit(this.selectedItems);
  }

  isSelected(item: any): boolean {
    if (this.selectedItems) {
      const result = this.selectedItems.find(obj => this.selectedFn(obj, item));
      return !isNullOrUndefined(result);
    }
    return false;
  }

  filter(query: string) {
    console.log(query);
    if (query && this.items) {
      this.filteredItems = this.items.filter(i => {
        if (!isFunction(this.displayField)) {
          const f = i[this.displayField];
          if (f && isFunction(f.indexOf)) {
            return f.indexOf(query) !== -1;
          }
        }
        return true;
      });
      console.log(this.filteredItems);
    } else {
      this.filteredItems = [...this.items];
    }
  }

  getDisplayField(item: any) {
    if (isString(this.displayField)) {
      return get(item, this.displayField);
    }
    if (isFunction(this.displayField)) {
      return this.displayField(item);
    }
  }

  toggleSelect(item: any) {
    if (this.isSelected(item)) {
      remove(this.selectedItems, obj => this.selectedFn(obj, item));
    } else {
      this.selectedItems.push(item);
    }
  }

  private setData(values: any[]) {
    this._items = values;
    if (!isNullOrUndefined(values)) {
      this.filter(null);
    }
  }
}
