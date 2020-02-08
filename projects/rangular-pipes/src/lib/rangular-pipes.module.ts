import {NgModule} from '@angular/core';
import {NumberSeparatorPipe} from './number-separator.pipe';
import {JalaliPipe} from './jalali.pipe';

const PIPES = [
  NumberSeparatorPipe,
  JalaliPipe,
];

@NgModule({
  declarations: [...PIPES],
  imports: [],
  exports: [...PIPES]
})
export class RangularPipesModule {
}
