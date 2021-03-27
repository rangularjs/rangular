import { waitForAsync } from '@angular/core/testing';
import {createComponentFactory, Spectator} from '@ngneat/spectator';

import {FormContainerComponent} from './form-container.component';

describe('FormContainerComponent', () => {
  let spectator: Spectator<FormContainerComponent>;
  const createComponent = createComponentFactory({
    component: FormContainerComponent,
    imports: [
    ],
    mocks: []
  });

  beforeEach(waitForAsync(() => {
    spectator = createComponent();
  }));

  it('should create', () => {
    const app = spectator.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
