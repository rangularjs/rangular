import {NgModule} from '@angular/core';
import {RequireAuthorityDirective} from './directives/require-authority.directive';
import {CommonModule} from '@angular/common';
import {OnlyNumberDirective} from './directives/only-number.directive';
import {EnglishNumberDirective} from './directives/english-number.directive';
import {InfoService} from './common/info.service';
import {AutofocusDirective} from './directives/autofocus.directive';
import {ParseLink} from './common/parse-link';
import {DataUtils} from './common/data-utils.service';

const COMPONENTS = [
  RequireAuthorityDirective,
  OnlyNumberDirective,
  EnglishNumberDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS, AutofocusDirective],
  exports: [...COMPONENTS, AutofocusDirective],
  providers: [InfoService, ParseLink, DataUtils],
})
export class RangularCommonModule {
}
