import {Directive, ElementRef, HostListener} from '@angular/core';
import {convertNumbersToEnglish} from '../common/utils';
import {get} from 'lodash';

@Directive({
  selector: '[ranEnglishNumber]'
})
export class EnglishNumberDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('keyup') onKeyUp() {
    const value = get(this.el.nativeElement, 'value');
    if (value) {
      this.el.nativeElement.value = convertNumbersToEnglish(value);
      const event: Event = document.createEvent('Event');
      event.initEvent('input', true, true);
      Object.defineProperty(event, 'target', {value: this.el.nativeElement, enumerable: true});
      this.el.nativeElement['dispatchEvent'](event);
    }
  }

}
