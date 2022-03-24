import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

export interface ScrollEvent {
  isReachingBottom: boolean;
  isReachingTop: boolean;
  originalEvent: Event;
  isWindowEvent: boolean;
}

declare const window: Window;

@Directive({
  selector: '[ranScrollEvent]'
})
export class ScrollEventDirective {

  @Output() public onscroll = new EventEmitter<ScrollEvent>();
  @Input() public bottomOffset = 100;
  @Input() public topOffset = 100;

  constructor() {
  }

  // handle host scroll
  @HostListener('scroll', ['$event'])
  public scrolled($event: Event): void {
    this.elementScrollEvent($event);
  }

  // handle window scroll
  @HostListener('window:scroll', ['$event'])
  public windowScrolled($event: Event): void {
    this.windowScrollEvent($event);
  }

  protected windowScrollEvent($event: Event): void {
    const target = $event.target as Document;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const isReachingTop = scrollTop < this.topOffset;
    const isReachingBottom = (target.body.offsetHeight - (window.innerHeight + scrollTop)) < this.bottomOffset;
    const emitValue: ScrollEvent = {isReachingBottom, isReachingTop, originalEvent: $event, isWindowEvent: true};
    this.onscroll.emit(emitValue);
  }

  protected elementScrollEvent($event: Event): void {
    const target = $event.target as HTMLElement;
    const scrollPosition = target.scrollHeight - target.scrollTop;
    const offsetHeight = target.offsetHeight;
    const isReachingTop = target.scrollTop < this.topOffset;
    const isReachingBottom = (scrollPosition - offsetHeight) < this.bottomOffset;
    const emitValue: ScrollEvent = {
      isReachingBottom,
      isReachingTop,
      originalEvent: $event,
      isWindowEvent: false,
    };
    this.onscroll.emit(emitValue);
  }
}
