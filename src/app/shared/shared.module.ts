import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CovalentCommonModule} from '@covalent/core/common';
import {CovalentSearchModule} from '@covalent/core/search';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentMediaModule} from '@covalent/core/media';
import {CovalentLoadingModule} from '@covalent/core/loading';
import {CovalentDataTableModule} from '@covalent/core/data-table';
import {CovalentNotificationsModule} from '@covalent/core/notifications';
import {CovalentMenuModule} from '@covalent/core/menu';
import {CovalentPagingModule} from '@covalent/core/paging';
import {CovalentStepsModule} from '@covalent/core/steps';
import {CovalentVirtualScrollModule} from '@covalent/core/virtual-scroll';
import {CovalentFileModule} from '@covalent/core/file';
import {CovalentDialogsModule} from '@covalent/core/dialogs';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule, MatRippleModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RangularCommonModule} from 'rangular-common';
import {RangularMaterialModule} from 'rangular-material';

const ANGULAR_MODULES: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];

const MATERIAL_MODULES: any[] = [
  MatCommonModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatRippleModule,
  MatRippleModule,
  MatDividerModule,
  MatSliderModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
];

const COVALENT_MODULES: any[] = [
  CovalentDataTableModule,
  CovalentMediaModule,
  CovalentLoadingModule,
  CovalentNotificationsModule,
  CovalentLayoutModule,
  CovalentMenuModule,
  CovalentPagingModule,
  CovalentDialogsModule,
  CovalentSearchModule,
  CovalentStepsModule,
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentVirtualScrollModule,
  CovalentFileModule,
];
const RANGULAR_MODULES: any[] = [
  RangularCommonModule,
  RangularMaterialModule,
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...COVALENT_MODULES,
    ...RANGULAR_MODULES,
  ],
  exports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...COVALENT_MODULES,
    ...RANGULAR_MODULES,
  ],
})
export class SharedModule {
}
