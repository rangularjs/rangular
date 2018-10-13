import {Injectable, Optional, Provider, SkipSelf} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {
  }

  success(message: string) {
    this.snackbar.open(message, null, {
      direction: 'rtl',
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'left',
      panelClass: ['bgc-green-700'],
    });
  }

  warn(message: string) {
    this.snackbar.open(message, null, {
      direction: 'rtl',
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'left',
      panelClass: ['bgc-deep-orange-700'],
    });
  }

  error(message: string) {
    this.snackbar.open(message, null, {
      direction: 'rtl',
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'left',
      panelClass: ['bgc-red-700'],
    });
  }
}


export function NOTIFICATION_PROVIDER_FACTORY(parent: NotificationService, snackBar: MatSnackBar): NotificationService {
  return parent || new NotificationService(snackBar);
}

export const NOTIFICATION_PROVIDER: Provider = {
  provide: NotificationService,
  deps: [[new Optional(), new SkipSelf(), NotificationService], MatSnackBar],
  useFactory: NOTIFICATION_PROVIDER_FACTORY
};
