import { EventEmitter, Input, Output, Directive } from '@angular/core';
import {UntypedFormGroup} from '@angular/forms';
import {isNullOrUndefined} from './utils';

/**
 * Base form for CRUD.
 */
@Directive()
export abstract class AbstractFormComponent<T> {

  /**
   * Local form variable.
   */
  form: UntypedFormGroup = this.createFormGroup();

  /**
   * This event fire if the form is valid.
   */
  @Output() submitted = new EventEmitter<T>();

  /**
   * This event fire if the cancel button pressed.
   */
  @Output() cancel = new EventEmitter<void>();

  /**
   * Local item.
   */
  _item: T;
  isPending = false;

  get item(): T {
    return this._item;
  }

  /**
   * Setter method.
   * @param obj
   */
  @Input()
  set item(obj: T) {
    this._item = obj;
    if (!isNullOrUndefined(obj)) {
      this.form.patchValue(obj);
    }
  }

  @Input()
  set pending(value: boolean) {
    this.isPending = value;
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  /**
   * This method check form validations and fire submit event after merge local item and form values
   */
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.isPending) {
      const obj = this._item as Object;
      this.submitted.emit({...obj, ...this.form.value});
    }
  }

  /**
   * This function check field validation
   * @param fieldName is the name of the field.
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field.invalid && (field.touched || field.dirty);
  }

  /**
   * This abstract function make the form group.
   */
  abstract createFormGroup(): UntypedFormGroup;

}
