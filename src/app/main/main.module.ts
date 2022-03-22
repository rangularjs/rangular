import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomePageComponent} from './home-page/home-page.component';
import {CustomDialogComponent} from './custom-dialog/custom-dialog.component';
import {DisconnectPageComponent} from './disconnect-page/disconnect-page.component';

@NgModule({
    imports: [
        SharedModule,
        MainRoutingModule,
    ],
    declarations: [HomePageComponent, CustomDialogComponent, DisconnectPageComponent]
})
export class MainModule {
}
