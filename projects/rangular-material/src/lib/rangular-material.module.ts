import {NgModule} from '@angular/core';
import {DisconnectComponent} from './disconnect/disconnect.component';
import {AvatarComponent} from './avatar/avatar.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {PromptDialogComponent} from './prompt-dialog/prompt-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {CovalentCommonModule} from '@covalent/core/common';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentMediaModule} from '@covalent/core/media';
import {CovalentSearchModule} from '@covalent/core/search';
import {NOTIFICATION_PROVIDER} from './services/notification.service';
import {DIALOG_PROVIDER} from './services/dialog.service';
import {DialogTitleComponent} from './dialog-title/dialog-title.component';
import {EmptyViewComponent} from './empty-view/empty-view.component';
import {ItemSelectorComponent} from './item-selector/item-selector.component';
import {ItemSelectorDialogComponent} from './item-selector-dialog/item-selector-dialog.component';
import {RangularCommonModule} from 'rangular-common';

const COMPONENTS = [
  AvatarComponent,
  ConfirmDialogComponent,
  DialogTitleComponent,
  DisconnectComponent,
  EmptyViewComponent,
  ItemSelectorComponent,
  ItemSelectorDialogComponent,
  PromptDialogComponent,
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCommonModule,
    MatDividerModule,
    MatListModule,
    CovalentSearchModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentCommonModule,
    RangularCommonModule,
  ],
  providers: [
    DIALOG_PROVIDER,
    NOTIFICATION_PROVIDER,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  entryComponents: [
    ConfirmDialogComponent,
    PromptDialogComponent,
    ItemSelectorDialogComponent,
  ],
})
export class RangularMaterialModule {
}
