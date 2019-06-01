import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RequireAuthorityDirective} from './require-authority.directive';
import {TestRequireAuthorityComponent} from '../components/test-require-authority/test-require-authority.component';
import {By} from '@angular/platform-browser';

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
