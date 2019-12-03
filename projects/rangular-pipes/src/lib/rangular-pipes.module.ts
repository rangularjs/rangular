import {NgModule} from '@angular/core';
import {NumberSeparatorPipe} from './number-separator.pipe';
import { JalaliPipe } from './jalali.pipe';

const PIPES = [
  NumberSeparatorPipe,
];

@NgModule({
  declarations: [...PIPES, JalaliPipe],
  imports: [],
  exports: [...PIPES]
})
export class RangularPipesModule {
}
