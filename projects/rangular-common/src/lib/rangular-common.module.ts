import {NgModule} from '@angular/core';
import {RequireAuthorityDirective} from './directives/require-authority.directive';
import {CommonModule} from '@angular/common';
import {OnlyNumberDirective} from './directives/only-number.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RequireAuthorityDirective, OnlyNumberDirective],
  exports: [RequireAuthorityDirective, OnlyNumberDirective]
})
export class RangularCommonModule {
}
