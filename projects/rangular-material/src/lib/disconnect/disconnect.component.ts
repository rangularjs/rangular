import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ran-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DisconnectComponent {

  @Input() image: string;
  @Input() retryButton = 'تلاش مجدد';
  @Input() message = 'ارتباط با سرور برقرار نشد!';
  @Output() retry = new EventEmitter<void>();

}
