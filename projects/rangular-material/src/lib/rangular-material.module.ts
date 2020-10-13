import { NgModule } from "@angular/core";
import { DisconnectComponent } from "./disconnect/disconnect.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { PromptDialogComponent } from "./prompt-dialog/prompt-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCommonModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CovalentCommonModule } from "@covalent/core/common";
import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentMediaModule } from "@covalent/core/media";
import { CovalentSearchModule } from "@covalent/core/search";
import { RangularCommonModule } from "rangular-common";
import { DialogTitleComponent } from "./dialog-title/dialog-title.component";
import { EmptyViewComponent } from "./empty-view/empty-view.component";
import { ItemSelectorComponent } from "./item-selector/item-selector.component";
import { ItemSelectorDialogComponent } from "./item-selector-dialog/item-selector-dialog.component";
import { MessageDialogComponent } from "./message-dialog/message-dialog.component";
import { FormContainerComponent } from "./form-container/form-container.component";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

const COMPONENTS = [
  AvatarComponent,
  ConfirmDialogComponent,
  DialogTitleComponent,
  DisconnectComponent,
  EmptyViewComponent,
  ItemSelectorComponent,
  ItemSelectorDialogComponent,
  PromptDialogComponent,
  MessageDialogComponent,
  FormContainerComponent,
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
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    CovalentSearchModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentCommonModule,
    RangularCommonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class RangularMaterialModule {}
