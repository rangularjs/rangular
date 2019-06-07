import {InfoService} from './info.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

describe('InfoService', () => {
  let service: InfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InfoService]
    });
    service = TestBed.get(InfoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('load', () => {
    it('should call get with the correct URL', () => {
      service.load().subscribe();

      const req = httpMock.expectOne('/api/info');
      expect(req.request.method).toEqual('GET');
      req.flush({version: '1.0.0'});
    });
  });

});
