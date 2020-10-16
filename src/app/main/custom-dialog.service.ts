import {Injectable, NgZone} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/portal';
import {ConfirmDialogComponent, DialogService, PromptDialogComponent, MessageDialogComponent} from 'rangular-material';

@Injectable()
export class CustomDialogService extends DialogService {

  constructor(dialog: MatDialog,
              private zone: NgZone) {
    super(dialog);
  }

  confirm(message: string, title?: string, disableClose?: boolean): MatDialogRef<ConfirmDialogComponent, any> {
    let result;
    this.zone.run(() => {
      result = super.confirm(message, title, disableClose);
    });
    return result;
  }

  prompt(title: string, value?: string, type?: string, disableClose?: boolean): MatDialogRef<PromptDialogComponent, any> {
    let result;
    this.zone.run(() => {
      result = super.prompt(title, value, type, disableClose);
    });
    return result;
  }

  message(title: string, message: string): MatDialogRef<MessageDialogComponent, any> {
    let result;
    this.zone.run(() => {
      result = super.message(title, message);
    });
    return result;
  }

  open<T>(component: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T> {
    let result;
    this.zone.run(() => {
      result = super.open(component, config);
    });
    return result;
  }
}
