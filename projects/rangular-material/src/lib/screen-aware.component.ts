import {TdMediaService} from '@covalent/core/media';
import {ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {isNullOrUndefined} from 'rangular-common';

export abstract class ScreenAwareComponent implements OnInit, OnDestroy {

  isSmallScreen = false;
  screenSubscription: Subscription;

  protected constructor(private media: TdMediaService,
                        private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.screenSubscription = this.media.registerQuery('gt-sm')
      .subscribe(result => {
        this.isSmallScreen = !result;
        this.changeDetector.markForCheck();
      });
  }

  ngOnDestroy(): void {
    if (!isNullOrUndefined(this.screenSubscription)) {
      this.screenSubscription.unsubscribe();
    }
  }

}
