import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {InfoState} from './info.state';


@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forFeature([InfoState]),
  ],
  exports: [],
})
export class RangularNgxsModule {
}
