import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent {

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>) {
  }

  close() {
    this.dialogRef.close();
  }

}
