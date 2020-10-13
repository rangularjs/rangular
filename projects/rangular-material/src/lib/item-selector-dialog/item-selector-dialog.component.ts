import {Component, Inject, OnInit} from '@angular/core';
import {TdMediaService} from '@covalent/core/media';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {get, isFunction} from 'lodash';

@Component({
  selector: 'ran-item-selector-dialog',
  templateUrl: './item-selector-dialog.component.html',
  styleUrls: ['./item-selector-dialog.component.scss'],
})
export class ItemSelectorDialogComponent implements OnInit {

  constructor(public media: TdMediaService,
              private dialogRef: MatDialogRef<ItemSelectorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    const onInit = get(this.data, 'onInit');
    if (isFunction(onInit)) {
      onInit();
    }
  }

  submit(data: any) {
    this.dialogRef.close(data);
  }

}
