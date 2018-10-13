import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ranRequireAuthority]'
})
export class RequireAuthorityDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('ranRequireAuthority') authority: string;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input('authorities')
  set authorities(items: string[]) {
    if (items && items.find(a => a === this.authority)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
