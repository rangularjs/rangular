import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {get, isFunction} from 'lodash';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ScreenAwareComponent} from '../screen-aware.component';

@Component({
  selector: 'ran-item-selector-dialog',
  templateUrl: './item-selector-dialog.component.html',
  styleUrls: ['./item-selector-dialog.component.scss'],
})
export class ItemSelectorDialogComponent extends ScreenAwareComponent implements OnInit {

  constructor(breakpointObserver: BreakpointObserver,
              changeDetector: ChangeDetectorRef,
              private dialogRef: MatDialogRef<ItemSelectorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super(breakpointObserver, changeDetector);
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

  getSmallBreakpoints(): string | string[] {
    return [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ];
  }
}
