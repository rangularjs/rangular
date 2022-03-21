import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {takeUntil} from 'rxjs/operators';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class ScreenAwareComponent implements OnInit, OnDestroy {

  isSmallScreen = false;
  destroyed = new Subject<void>();

  protected constructor(private breakpointObserver: BreakpointObserver,
                        private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(this.getSmallBreakpoints())
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        this.changeDetector.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  getSmallBreakpoints(): string | string[] {
    return [
      Breakpoints.XSmall,
      Breakpoints.Small,
    ];
  }

}
