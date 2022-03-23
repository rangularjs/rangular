import {FormGroup, ValidationErrors} from '@angular/forms';
import {isNullOrUndefinedOrEmpty} from './utils';
import {DATE_FORMAT, J_DATE_FORMAT} from './constants';
import moment from 'moment-jalaali';

export function dateRange(fromDateField = 'fromDate', toDateField = 'toDate') {
  return (control: FormGroup): ValidationErrors | null => {
    const td = control.get(toDateField).value;
    const fd = control.get(fromDateField).value;
    if (!isNullOrUndefinedOrEmpty(td) && !isNullOrUndefinedOrEmpty(fd)) {
      const toDate = moment(td, J_DATE_FORMAT).format(DATE_FORMAT);
      const fromDate = moment(fd, J_DATE_FORMAT).format(DATE_FORMAT);
      return toDate && fromDate && fromDate > toDate ? {range: true} : null;
    }
    return null;
  };
}
