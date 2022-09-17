import {AbstractFormComponent} from './abstract-form.component';
import {BaseEntity} from './base.entity';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

class TestEntity implements BaseEntity {
  constructor(public id: number,
              public title: string,
              public data?: any,
              public items?: any[]) {
  }
}

@Component({
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="id">
      <div formGroupName="data">
        <input formControlName="name">
      </div>
      <button type="submit">Save</button>
    </form>`
})
export class TestFormComponent extends AbstractFormComponent<TestEntity> {
  createFormGroup(): UntypedFormGroup {
    return new UntypedFormGroup({
      id: new UntypedFormControl(null, Validators.required),
      data: new UntypedFormGroup({
        name: new UntypedFormControl()
      }),
      items: new UntypedFormArray([])
    });
  }
}

describe('AbstractFormComponent', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let component: TestFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [TestFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the form', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have invalid state', () => {
    fixture.detectChanges();

    expect(component.form.valid).toBeFalsy();
  });

  it('should set form values', () => {
    component.item = {id: 1, title: 'test', data: {name: 'name'}, items: [{id: 1}]};
    fixture.detectChanges();

    expect(component.form.controls['id'].value).toEqual(1);
    expect(component.form.controls['data']['controls']['name'].value).toEqual('name');
  });

  it('should be invalid', () => {
    expect(component.isFieldInvalid('id')).toBeFalsy();
  });

  it('should be disabled', () => {
    component.pending = true;

    fixture.detectChanges();

    expect(component.form.disabled).toBeTruthy();
  });

  it('should be enabled', () => {
    component.pending = false;

    fixture.detectChanges();

    expect(component.form.disabled).toBeFalsy();
  });

  it('should submit form', () => {
    component.item = {id: 1, title: 'test'};
    component.form.patchValue({id: 2});
    fixture.detectChanges();

    let result;
    component.submitted.subscribe(item => result = item);

    component.submit();

    expect(component.form.valid).toBeTruthy();
    expect(result.id).toEqual(2);
    expect(result.title).toEqual('test');
  });
});
