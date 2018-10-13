import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {TdLoadingService} from '@covalent/core/loading';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, finalize, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private _pendingRequests = 0;

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loadingService = this.injector.get(TdLoadingService);
    this._pendingRequests++;
    if (1 === this._pendingRequests) {
      loadingService.register('mainLoading');
    }
    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(res => {
        return throwError(res);
      }),
      finalize(() => {
        this._pendingRequests--;
        if (this._pendingRequests <= 0) {
          loadingService.resolveAll('mainLoading');
        }
      }),
    );
  }

}
