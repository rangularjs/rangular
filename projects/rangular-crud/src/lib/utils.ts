import {EnumModel, isNullOrUndefined} from 'rangular-common';
import {find, get} from 'lodash';

export function enumModelCellRenderer(items: EnumModel[], defaultValue = 'نامشخص') {
  return (params: any) => {
    if (!isNullOrUndefined(get(params, 'value'))) {
      const item = find(items, e => e.value === params.value);
      if (!isNullOrUndefined(item)) {
        return item.title;
      }
    }
    return defaultValue;
  };
}

export function entityCellRenderer(field: string) {
  return (params: any) => {
    if (!isNullOrUndefined(get(params, 'value'))) {
      return get(params, `value.${field}`);
    }
    return '';
  };
}

export function booleanCellRenderer(trueText = 'دارد', falseText = 'ندارد') {
  return (params) => {
    if (!isNullOrUndefined(get(params, 'value'))) {
      if (params.value) {
        return trueText;
      }
    }
    return falseText;
  };
}

export function activeCellRenderer() {
  return booleanCellRenderer('فعال', 'غیرفعال');
}

export const LOCALE_TEXT = {

  // for filter panel
  page: 'صفحه',
  more: 'بیشتر',
  to: 'تا',
  of: 'از',
  next: 'بعدی',
  last: 'آخر',
  first: 'اول',
  previous: 'قبلی',
  loadingOoo: 'لطفا شکیبا باشید ...',
  selectAll: 'انتخاب همه',
  searchOoo: 'جستجو ...',
  filterOoo: 'فیلتر ...',
  applyFilter: 'اعمال فیلتر',
  equals: 'مساوی',
  lessThan: 'کمتر از',
  greaterThan: 'بیشتر از',
  contains: 'شامل',
  startsWith: 'شروع با',
  endsWith: 'پایان با',
  notEqual: 'نا مساوی',
  inRange: 'در بازه',
  lessThanOrEqual: 'کمتر یا مساوی',
  greaterThanOrEqual: 'بیشتر یا مساوی',
  notContains: 'شامل نباشد',
  clearFilter: 'حذف فیلتر',
  blanks: 'خالی',


  // the header of the default group column
  group: 'گروه',

  // other
  noRowsToShow: 'در حال حاضر داده ای موجود نیست',

  // standard menu
  copy: 'کپی',
  copyWithHeaders: 'کپی با هدر',

  notEquals: 'نامساوی',

  // filter conditions
  andCondition: 'و',
  orCondition: 'یا',

  // tool panel
  columns: 'ستون ها',
  filters: 'فیلترها',
  groups: 'گروه ها',
  sum: 'مجموع',
  min: 'حداقل',
  max: 'حداکثر',
  count: 'تعداد',
  average: 'میانگین',
  totalRows: 'تعداد',
};
