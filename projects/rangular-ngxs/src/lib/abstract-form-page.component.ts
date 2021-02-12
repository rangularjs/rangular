import { OnDestroy, OnInit, Directive } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngxs/store';
import {get} from 'lodash';
import {BaseEntity} from 'rangular-common';
import {Observable} from 'rxjs';
import {getIsEditMode, getPending, getSelectedItem} from './shared-selectors';

@Directive()
export abstract class AbstractFormPageComponent<T extends BaseEntity> implements OnInit, OnDestroy {

  isEditMode$: Observable<boolean>;
  pending$: Observable<boolean>;
  item$: Observable<T>;

  protected constructor(protected store: Store,
                        protected route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isEditMode$ = this.store.select<boolean>(getIsEditMode(this.getStateClass()));
    this.pending$ = this.store.select<boolean>(getPending(this.getStateClass()));
    this.item$ = this.store.select<any>(getSelectedItem(this.getStateClass()));

    this.route.params
      .subscribe(params => {
        const id = +get(params, 'id');
        if (isNaN(id)) {
          window.history.back();
          return;
        }

        this.onInit();

        if (id === 0) {
          this.store.dispatch(this.onNew());
        } else {
          this.store.dispatch(this.onLoad(id));
        }
      });
  }

  save(item: T) {
    let action;
    if (item.id) {
      action = this.onUpdate(item);
    } else {
      action = this.onSave(item);
    }
    this.store.dispatch(action)
      .subscribe(() => this.back());
  }

  cancel() {
    this.back();
  }

  back() {
    window.history.back();
  }

  ngOnDestroy(): void {
    this.store.dispatch(this.onDestroy());
  }

  abstract onLoad(id: number): any;

  abstract onNew(): any;

  abstract onSave(item: T): any;

  abstract onUpdate(item: T): any;

  abstract getStateClass(): any;

  abstract onDestroy();

  onInit() {
  }
}
