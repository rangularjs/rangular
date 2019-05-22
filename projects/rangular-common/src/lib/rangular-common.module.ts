import {NgModule} from '@angular/core';
import {RequireAuthorityDirective} from './directives/require-authority.directive';
import {CommonModule} from '@angular/common';
import {OnlyNumberDirective} from './directives/only-number.directive';
import {EnglishNumberDirective} from './directives/english-number.directive';
import {InfoService} from './common/info.service';

const COMPONENTS = [
  RequireAuthorityDirective,
  OnlyNumberDirective,
  EnglishNumberDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [InfoService]
})
export class RangularCommonModule {
}
