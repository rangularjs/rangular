import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InfoModel} from './info.model';

@Injectable({providedIn: 'root'})
export class InfoService {

  URL = '/api/info';

  constructor(private http: HttpClient) {
  }

  load(): Observable<InfoModel> {
    return this.http.get<InfoModel>(this.URL);
  }
}
