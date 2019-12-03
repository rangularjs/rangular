import {Pipe, PipeTransform} from '@angular/core';
import * as moment_ from 'moment-jalaali';
import {isNullOrUndefined} from 'rangular-common';

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const moment = moment_;
    if (isNullOrUndefined(value)) {
      return;
    }
    moment.locale('fa');
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
