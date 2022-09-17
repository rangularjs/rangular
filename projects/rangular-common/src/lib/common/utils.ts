import {UntypedFormArray, UntypedFormGroup} from '@angular/forms';
import {BaseEntity} from './base.entity';
import {get, isNull, isUndefined, trim} from 'lodash';
import {EnumModel} from './enum.model';

export function setFormValuesFromObject(form: UntypedFormGroup, obj: any) {
  Object.keys(obj).forEach(key => {
    const item = form.get(key);
    if (item && !(item instanceof UntypedFormArray) && !(item instanceof UntypedFormGroup)) {
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

export function getEnumModelValue(value: any, items: EnumModel[]) {
  if (isNullOrUndefined(items)) {
    return value;
  }
  const item = items.find(v => v.value === value);
  return get(item, 'title');
}

export function compareBaseEntity(e1: BaseEntity, e2: BaseEntity) {
  return get(e1, 'id') === get(e2, 'id');
}

export function convertNumbersToEnglish(value: string): string {
  value = value.replace(/۰/g, '0');
  value = value.replace(/۱/g, '1');
  value = value.replace(/۲/g, '2');
  value = value.replace(/۳/g, '3');
  value = value.replace(/۴/g, '4');
  value = value.replace(/۵/g, '5');
  value = value.replace(/۶/g, '6');
  value = value.replace(/۷/g, '7');
  value = value.replace(/۸/g, '8');
  value = value.replace(/۹/g, '9');
  return value;
}

export function replaceArabicAlpha(value: string): string {
  return value
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک');
}
