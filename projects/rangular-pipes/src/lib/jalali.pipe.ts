import {Pipe, PipeTransform} from '@angular/core';
import moment from 'moment-jalaali';
import {isNullOrUndefined} from 'rangular-common';

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNullOrUndefined(value)) {
      return;
    }
    moment.loadPersian({
      dialect: 'persian-modern'
    });
    let format = 'jYYYY/jMM/jDD HH:mm:ss';
    if (args) {
      format = args;
      if (format === 'fromNow') {
        return moment(value).fromNow();
      }
    }
    return moment(value).format(format);
  }

}
