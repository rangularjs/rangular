import {NgModule} from '@angular/core';
import {RequireAuthorityDirective} from './directives/require-authority.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [RequireAuthorityDirective],
  exports: [RequireAuthorityDirective]
})
export class RangularCommonModule {
}
