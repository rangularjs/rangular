import {CrudService} from './crud.service';
import {BaseEntity} from './base.entity';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

@Injectable()
export class TestService extends CrudService<BaseEntity> {

  constructor(http: HttpClient) {
    super(http);
  }

  url(): string {
    return '/api/test';
  }

}

describe('CrudService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });
    service = TestBed.get(TestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('getAll', () => {
    it('should call get with the correct URL', () => {
      service.getAll().subscribe();

      const req = httpMock.expectOne(service.url());
      expect(req.request.method).toEqual('GET');
      req.flush({id: 1});
      httpMock.verify();
    });

    it('should call get with the correct URL and params', () => {
      const params = new HttpParams().set('q', 'query');
      service.getAll(params).subscribe();

      const req = httpMock.expectOne(`${service.url()}?q=query`);
      expect(req.request.method).toEqual('GET');
      expect(req.request.params).toEqual(params);
      req.flush({id: 1});
      httpMock.verify();
    });
  });

  describe('getOne', () => {
    it('should call get with the correct URL', () => {
      service.getOne(1).subscribe();

      const req = httpMock.expectOne(`${service.url()}/1`);
      expect(req.request.method).toEqual('GET');
      req.flush({id: 1});
      httpMock.verify();
    });
  });

  describe('create', () => {
    it('should call post with the correct URL', () => {
      service.create({name: 'test'}).subscribe();

      const req = httpMock.expectOne(`${service.url()}`);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual({name: 'test'});
      req.flush({id: 1});
      httpMock.verify();
    });
  });

  describe('update', () => {
    it('should call put with the correct URL', () => {
      service.update(1, {id: 1, name: 'test'}).subscribe();

      const req = httpMock.expectOne(`${service.url()}/1`);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual({id: 1, name: 'test'});
      req.flush({id: 1});
      httpMock.verify();
    });
  });

  describe('remove', () => {
    it('should call delete with the correct URL', () => {
      service.remove(1).subscribe();

      const req = httpMock.expectOne(`${service.url()}/1`);
      expect(req.request.method).toEqual('DELETE');
      req.flush({id: 1});
      httpMock.verify();
    });
  });
});
