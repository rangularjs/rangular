import {EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {isNullOrUndefined, setFormValuesFromObject} from './utils';
import {has} from 'lodash';

/**
 * Base form for CRUD.
 */
export abstract class AbstractFormComponent<T> {

  @Output() submitted = new EventEmitter<T>();
  form: FormGroup = this.createFormGroup();

  _item: T;

  get item(): T {
    return this._item;
  }

  @Input()
  set item(obj: T) {
    this._item = obj;
    if (!isNullOrUndefined(obj)) {
      setFormValuesFromObject(this.form, obj);
    }
  }

  submit() {
    if (this.form.valid) {
      const obj = this._item as Object;
      this.submitted.emit({...obj, ...this.form.value});
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field.invalid && (field.touched || field.dirty);
  }

  abstract createFormGroup(): FormGroup;

}
