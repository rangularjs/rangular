import {OnInit} from '@angular/core';
import {Navigate} from '@ngxs/router-plugin';
import {Store} from '@ngxs/store';
import {BaseEntity, isNullOrUndefined} from 'rangular-common';
import {ColumnModel} from 'rangular-crud';
import {DialogService} from 'rangular-material';
import {Observable} from 'rxjs';
import {getItems} from './shared-selectors';

export abstract class AbstractCrudPageComponent<T extends BaseEntity> implements OnInit {

  items$: Observable<T[]>;

  columns: ColumnModel[];

  protected checkStateForLoading = true;

  protected constructor(protected store: Store,
                        protected dialogService: DialogService) {
  }

  ngOnInit() {
    this.items$ = this.store.select<any[]>(getItems(this.getStateClass()));
    this.columns = this.createColumns();

    this.onInit();
    this.load();
  }

  load(force?: boolean) {
    const action = this.onLoad();
    if (!isNullOrUndefined(action)) {
      if (!this.checkStateForLoading || force) {
        this.store.dispatch(action);
      } else {
        this.store.selectOnce<any[]>(getItems(this.getStateClass()))
          .subscribe(items => {
            if (isNullOrUndefined(items) || items.length === 0) {
              this.store.dispatch(action);
            }
          });
      }
    }
  }

  add() {
    this.store.dispatch(new Navigate([this.baseNavigationUrl(), this.navigationUrl(), '0'], this.navigateQueryParams()));
  }

  edit(item: T) {
    this.store.dispatch(new Navigate([this.baseNavigationUrl(), this.navigationUrl(), item.id]));
  }

  remove(ids: number[]) {
    this.dialogService.confirm(this.getRemoveMessage())
      .afterClosed()
      .subscribe(result => {
        if (result) {
          for (const id of ids) {
            this.store.dispatch(this.onRemove(id));
          }
        }
      });
  }

  abstract onLoad();

  abstract onRemove(id: number);

  abstract navigationUrl(): string;

  abstract createColumns(): ColumnModel[];

  abstract getStateClass(): any;

  protected onInit() {
  }

  protected navigateQueryParams(): any {
  }

  protected getRemoveMessage(): string {
    return 'آیا مطمئن هستید؟';
  }

  protected baseNavigationUrl(): string {
    return '/';
  }
}
