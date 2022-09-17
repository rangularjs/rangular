import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {get} from 'lodash';
import {isNullOrUndefined} from 'rangular-common';

@Component({
  selector: 'ran-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss']
})
export class PromptDialogComponent implements OnInit {

  form = new UntypedFormGroup({
    value: new UntypedFormControl(null, Validators.required)
  });

  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<PromptDialogComponent>) {
  }

  ngOnInit() {
    const value = get(this.data, 'value');
    if (!isNullOrUndefined(value)) {
      this.form.get('value').setValue(value);
    }
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
