import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EnglishNumberDirective} from './english-number.directive';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <form [formGroup]="form">
      <input formControlName="name" ranEnglishNumber>
    </form>
  `
})
export class TestComponent {
  form = new FormGroup({
    name: new FormControl()
  });
}

describe('EnglishNumberDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [TestComponent, EnglishNumberDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should convert persian numbers to english', () => {
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input'));
    inputEl.nativeElement.value = '۱۲۳';

    inputEl.triggerEventHandler('keyup', {});

    expect(component.form.controls['name'].value).toBe('123');
  });
});
