import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ran-empty-view',
  templateUrl: './empty-view.component.html',
  styleUrls: ['./empty-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyViewComponent {

  @Input() icon = 'mood';
  @Input() iconStyle: any;
  @Input() src: string;
  @Input() imgStyle: any;
  @Input() message: string;
  @Input() buttonText = 'جدید';
  @Input() showButton = true;
  @Output() action = new EventEmitter();

}
