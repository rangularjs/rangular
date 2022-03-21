import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, finalize, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {LoadingService} from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loadingService = this.injector.get(LoadingService);
    loadingService.handleRequest('plus');
    return next.handle(req)
      .pipe(
        map(event => {
          return event;
        }),
        catchError(res => {
          return throwError(res);
        }),
        finalize(() => loadingService.handleRequest()),
      );
  }
}
