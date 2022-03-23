import {FormGroup, ValidationErrors} from '@angular/forms';
import {isNullOrUndefinedOrEmpty} from './utils';
import {J_DATE_FORMAT} from './constants';
import moment from 'moment-jalaali';

export function dateRange(fromDateField = 'fromDate', toDateField = 'toDate') {
  return (control: FormGroup): ValidationErrors | null => {
    const td = control.get(toDateField).value;
    const fd = control.get(fromDateField).value;
    if (!isNullOrUndefinedOrEmpty(td) && !isNullOrUndefinedOrEmpty(fd)) {
      const toDate = moment(td, J_DATE_FORMAT);
      const fromDate = moment(fd, J_DATE_FORMAT);
      return toDate.isValid() && fromDate.isValid() && fromDate.isAfter(toDate) ? {range: true} : null;
    }
    return null;
  };
}
