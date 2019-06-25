import {NgModule} from '@angular/core';
import {NumberSeparatorPipe} from './number-separator.pipe';

const PIPES = [
  NumberSeparatorPipe,
];

@NgModule({
  declarations: [...PIPES],
  imports: [],
  exports: [...PIPES]
})
export class RangularPipesModule {
}
