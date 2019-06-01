import {NgModule} from '@angular/core';
import {RequireAuthorityDirective} from './directives/require-authority.directive';
import {CommonModule} from '@angular/common';
import {OnlyNumberDirective} from './directives/only-number.directive';
import {EnglishNumberDirective} from './directives/english-number.directive';
import {InfoService} from './common/info.service';
import {AutofocusDirective} from './directives/autofocus.directive';

const COMPONENTS = [
  RequireAuthorityDirective,
  OnlyNumberDirective,
  EnglishNumberDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS, AutofocusDirective],
  exports: [...COMPONENTS, AutofocusDirective],
  providers: [InfoService]
})
export class RangularCommonModule {
}
