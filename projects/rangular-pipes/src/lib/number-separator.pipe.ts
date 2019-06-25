import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'rangular-common';
import {isArray} from 'lodash';

@Pipe({
  name: 'numberSeparator'
})
export class NumberSeparatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const separator = !isNullOrUndefined(args) ? isArray(args) ? args[0] : args : ',';
    if (!isNullOrUndefined(value)) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
    }
    return value;
  }

}
