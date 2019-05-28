import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[ranAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  @Input() ranAutofocus = 500;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, this.ranAutofocus);
  }

}
