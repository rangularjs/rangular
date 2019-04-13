import {FormArray, FormGroup} from '@angular/forms';
import {BaseEntity} from './base.entity';
import {get, isNull, isUndefined, trim} from 'lodash';
import {EnumModel} from './enum.model';

export function setFormValuesFromObject(form: FormGroup, obj: any) {
  Object.keys(obj).forEach(key => {
    const item = form.get(key);
    if (item && !(item instanceof FormArray) && !(item instanceof FormGroup)) {
      item.setValue(obj[key]);
    }
  });
}

export function replaceUpdatedItemInListByFn(list: BaseEntity[], updatedItem: BaseEntity, predicate: any): BaseEntity[] {
  const item = list.find(predicate);
  const newItem = {
    ...item,
    ...updatedItem,
  };
  const result = [...list];
  const i = list.findIndex(predicate);
  result[i] = newItem;
  return result;
}

export function replaceUpdatedItemInList(list: BaseEntity[], updatedItem: BaseEntity): BaseEntity[] {
  return replaceUpdatedItemInListByFn(list, updatedItem, (c) => c.id === updatedItem.id);
}

export function removeItemFromListByFn(list: BaseEntity[], predicate: any): BaseEntity[] {
  if (!list) {
    return list;
  }
  const removedIndex = list.findIndex(predicate);
  const result = [...list];
  if (removedIndex !== -1) {
    result.splice(removedIndex, 1);
  }
  return result;
}

export function removeItemFromList(list: BaseEntity[], id: number): BaseEntity[] {
  return removeItemFromListByFn(list, (c) => c.id === id);
}

export function parse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}

export function isNullOrUndefined(item: any) {
  return isNull(item) || isUndefined(item);
}

export function isNullOrUndefinedOrEmpty(item: string): boolean {
  return isNullOrUndefined(item) || trim(item) === '';
}

export function getEnumModelValue(value: string, items: EnumModel[]) {
  if (isNullOrUndefined(items)) {
    return value;
  }
  const item = items.find(v => v.value === value);
  return get(item, 'title');
}
