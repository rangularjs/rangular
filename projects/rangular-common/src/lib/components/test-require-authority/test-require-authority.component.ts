import {Component} from '@angular/core';

@Component({
  template: `
    <ng-template ranRequireAuthority="ROLE_USER" [authorities]="authorities">
      <button class="button1">Button1</button>
    </ng-template>
    <ng-template [ranRequireAuthority]="['ROLE_OTHER','ROLE_USER']" [authorities]="authorities">
      <button class="button2">Button2</button>
    </ng-template>
    <ng-template [ranRequireAuthority]="['ROLE_OTHER','ROLE_USER1']" [authorities]="authorities">
      <button class="button3">Button3</button>
    </ng-template>
  `
})
export class TestRequireAuthorityComponent {

  authorities = [
    'ROLE_USER', 'ROLE_ADMIN', 'ROLE_DESIGNER'
  ];

}
