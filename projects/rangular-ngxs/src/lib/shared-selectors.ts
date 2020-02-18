import {createSelector} from '@ngxs/store';
import {BaseEntity} from 'rangular-common';

export function getItems(stateClass) {
  return createSelector([stateClass], ({items}: { items: BaseEntity[] }) => {
    return items;
  });
}

export function getSelectedItem(stateClass) {
  return createSelector([stateClass], ({selectedItem}: { selectedItem: BaseEntity }) => {
    return selectedItem;
  });
}

export function getIsEditMode(stateClass) {
  return createSelector([stateClass], ({isEditMode}: { isEditMode: boolean }) => {
    return isEditMode;
  });
}

export function getPending(stateClass) {
  return createSelector([stateClass], ({pending}: { pending: boolean }) => {
    return pending;
  });
}
