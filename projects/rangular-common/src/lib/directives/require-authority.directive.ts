import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {includes, some} from 'lodash';
import {isNullOrUndefined} from '../common/utils';

@Directive({
  selector: '[ranRequireAuthority]'
})
export class RequireAuthorityDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('ranRequireAuthority') authority: string | string[];

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input('authorities')
  set authorities(items: string[]) {
    let hasPermission = false;
    if (!isNullOrUndefined(items)) {
      hasPermission = some(items, item => includes(this.authority, item));
    }
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
