import {Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
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
