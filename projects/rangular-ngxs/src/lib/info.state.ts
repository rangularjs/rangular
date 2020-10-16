import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {map} from 'rxjs/operators';
import {InfoLoaded, InfoModel, InfoService, InfoStateModel, LoadInfo} from 'rangular-common';

@State<InfoStateModel>({
  name: 'info',
  defaults: {
    info: null,
  },
})
@Injectable()
export class InfoState {

  constructor(private service: InfoService) {
  }

  @Selector()
  static getInfo(state: InfoStateModel): InfoModel {
    return state.info;
  }

  @Action(LoadInfo)
  load(ctx?: StateContext<InfoStateModel>) {
    return this.service.load()
      .pipe(
        map(item => ctx.dispatch(new InfoLoaded(item))),
      );
  }

  @Action(InfoLoaded)
  setStateOnInfoLoaded(ctx?: StateContext<InfoStateModel>, event?: InfoLoaded) {
    ctx.patchState({
      info: event.payload,
    });
  }
}
