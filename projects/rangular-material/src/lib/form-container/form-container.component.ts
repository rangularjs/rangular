import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ran-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContainerComponent {

  @Input() title: string;

}
