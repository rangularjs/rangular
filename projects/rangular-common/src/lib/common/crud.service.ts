import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BaseEntity} from './base.entity';

/**
 * Base class for restful CRUD services.
 */
export abstract class CrudService<T extends BaseEntity> {

  protected constructor(protected http: HttpClient) {
  }

  /**
   * Api url.
   */
  abstract url(): string;

  getAll(params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(this.url(), {params: params});
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.url()}/${id}`);
  }

  create(data: any): Observable<T> {
    return this.http.post<T>(this.url(), data);
  }

  update(id: number, data: any): Observable<T> {
    return this.http.put<T>(`${this.url()}/${id}`, data);
  }

  remove(id: number): Observable<T> {
    return this.http.delete<T>(`${this.url()}/${id}`);
  }
}
