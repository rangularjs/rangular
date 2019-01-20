import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ComponentType} from '@angular/cdk/portal';
import {PromptDialogComponent} from '../prompt-dialog/prompt-dialog.component';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {ItemSelectorDialogComponent} from '../item-selector-dialog/item-selector-dialog.component';
import {MessageDialogComponent} from '../message-dialog/message-dialog.component';

export interface ItemSelectorConfig {
  displayField: any;
  multiple?: boolean;
  searchPlaceHolder?: string;
  acceptButton?: string;
  icon?: string;
  selectedFn?: (obj, item) => boolean;
  selectedItems?: any[];
  onInit?: any;
}

@Injectable({providedIn: 'root'})
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
          config?: MatDialogConfig): MatDialogRef<T> {
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

  /**
   * Opens a message dialog with the provided config.
   * @param title
   * @param message
   */
  message(title: string, message: string) {
    return this.dialog.open(MessageDialogComponent, {
      direction: 'rtl',
      minWidth: '400px',
      data: {
        acceptButton: 'تایید',
        title,
        message,
      },
    });
  }

  openItemSelector<T>(items: T[], config: ItemSelectorConfig) {
    return this.open(ItemSelectorDialogComponent, this._createConfig({
      disableClose: false,
      width: '100%',
      height: 'calc(100% - 64px)',
      maxWidth: '100%',
      panelClass: 'item-selector-panel',
      data: {
        items,
        icon: 'chevron_left',
        multiple: false,
        ...config,
      }
    }));
  }

  private _createConfig(config: any = {}): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.direction = 'rtl';
    dialogConfig.disableClose = false;
    dialogConfig.width = '500px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = false;
    Object.assign(dialogConfig, config);
    return dialogConfig;
  }

}
