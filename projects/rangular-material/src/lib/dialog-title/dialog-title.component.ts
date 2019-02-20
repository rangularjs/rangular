import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ran-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss']
})
export class DialogTitleComponent {

  @Input() item: any;
  @Input() type = 'آیتم';
  @Input() displayField: string;
  @Input() isEditMode: boolean;
  @Input() backgroundClass = 'bgc-blue-800';
  @Input() colorClass = 'tc-white-4';
  @Input() customTitle: string;

  @Output() close = new EventEmitter<void>();
}
