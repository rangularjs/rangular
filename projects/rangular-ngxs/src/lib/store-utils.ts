import {Store} from '@ngxs/store';
import {isNullOrUndefined} from 'rangular-common';

export function loadIfNotLoaded(store: Store, selector: any, action: any) {
  store.selectOnce(selector)
    .subscribe((items: any[]) => {
      if (isNullOrUndefined(items) || items.length === 0) {
        store.dispatch(action);
      }
    });
}
