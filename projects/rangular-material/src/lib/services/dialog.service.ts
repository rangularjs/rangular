import {Injectable, Optional, Provider, SkipSelf} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ComponentType} from '@angular/cdk/portal';
import {PromptDialogComponent} from '../prompt-dialog/prompt-dialog.component';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  /**
   * params:
   * - component: ComponentType<T>
   * - config: MatDialogConfig
   * Wrapper function over the open() method in MatDialog.
   * Opens a modal dialog containing the given component.
   */
  open<T>(component: ComponentType<T>,
          config: MatDialogConfig): MatDialogRef<T> {
    return this.dialog.open(component, this._createConfig(config));
  }

  /**
   * Opens a confirm dialog with the provided config.
   * Returns an MatDialogRef<MaterialConfirmDialogComponent> object.
   */
  confirm(message: string, title = 'هشدار', disableClose = false) {
    return this.dialog.open(ConfirmDialogComponent, {
      direction: 'rtl',
      disableClose,
      minWidth: '400px',
      data: {
        acceptButton: 'بله',
        cancelButton: 'خیر',
        message,
        title,
      },
    });
  }

  /**
   * Opens a prompt dialog with the provided config.
   * Returns an MatDialogRef<MaterialConfirmDialogComponent> object.
   */
  prompt(title: string, value?: string, type = 'text', disableClose = false) {
    return this.dialog.open(PromptDialogComponent, {
      direction: 'rtl',
      disableClose,
      minWidth: '400px',
      data: {
        acceptButton: 'تایید',
        cancelButton: 'انصراف',
        title,
        type,
        value,
      },
    });
  }

  private _createConfig(config: any): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.direction = 'rtl';
    dialogConfig.disableClose = false;
    dialogConfig.width = '500px';
    dialogConfig.hasBackdrop = true;
    Object.assign(dialogConfig, config);
    return dialogConfig;
  }

}

export function DIALOG_PROVIDER_FACTORY(parent: DialogService, dialog: MatDialog): DialogService {
  return parent || new DialogService(dialog);
}

export const DIALOG_PROVIDER: Provider = {
  provide: DialogService,
  deps: [[new Optional(), new SkipSelf(), DialogService], MatDialog],
  useFactory: DIALOG_PROVIDER_FACTORY
};
