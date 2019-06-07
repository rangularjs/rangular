import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RequireAuthorityDirective} from './require-authority.directive';
import {By} from '@angular/platform-browser';
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

describe('Directive: RequireAuthorityDirective', () => {

  let component: TestRequireAuthorityComponent;
  let fixture: ComponentFixture<TestRequireAuthorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequireAuthorityDirective, TestRequireAuthorityComponent]
    });
    fixture = TestBed.createComponent(TestRequireAuthorityComponent);
    component = fixture.componentInstance;
  });

  it('should has button with ROLE_USER', () => {
    fixture.detectChanges();
    const buttonEl = fixture.debugElement.query(By.css('.button1'));
    expect(buttonEl).not.toBeNull();
  });

  it('should has button with array roles', () => {
    fixture.detectChanges();
    const buttonEl = fixture.debugElement.query(By.css('.button2'));
    expect(buttonEl).not.toBeNull();
  });

  it('should has not button with ROLE_OTHER', () => {
    fixture.detectChanges();
    const buttonEl = fixture.debugElement.query(By.css('.button3'));
    expect(buttonEl).toBeNull();
  });
});
