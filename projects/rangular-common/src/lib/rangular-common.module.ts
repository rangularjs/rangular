import {NgModule} from '@angular/core';
import {RequireAuthorityDirective} from './directives/require-authority.directive';
import {CommonModule} from '@angular/common';
import {OnlyNumberDirective} from './directives/only-number.directive';
import { EnglishNumberDirective } from './directives/english-number.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RequireAuthorityDirective, OnlyNumberDirective, EnglishNumberDirective],
  exports: [RequireAuthorityDirective, OnlyNumberDirective]
})
export class RangularCommonModule {
}
