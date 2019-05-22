import {InfoModel} from './info.model';

export class LoadInfo {
  static readonly type = '[Common] LoadInfo';
}

export class InfoLoaded {
  static readonly type = '[Common] InfoLoaded';

  constructor(public payload: InfoModel) {
  }
}
