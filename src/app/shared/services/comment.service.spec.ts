import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  let service, http, backend;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CommentService]
  }));

  beforeEach(inject([CommentService, HttpClient, HttpTestingController], (
    conf: CommentService,
    _h: HttpClient,
    _b: HttpTestingController
  ) => {
    service = conf;
    http = _h;
    backend = _b;
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should get data getCommunComment', () => {
    service.getCommunComment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL + 'Commun',
      method: 'GET'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });


  it('should get data getJsp1Comment', () => {
    service.getJsp1Comment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL + 'Jsp1',
      method: 'GET'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });

  it('should get data getJsp2Comment', () => {
    service.getJsp2Comment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL + 'Jsp2',
      method: 'GET'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });

  it('should get data getJsp3Comment', () => {
    service.getJsp3Comment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL + 'Jsp3',
      method: 'GET'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });

  it('should get data getJsp4Comment', () => {
    service.getJsp4Comment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL + 'Jsp4',
      method: 'GET'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });

  it('should get data getQuestionComment', () => {
    service.getQuestionComment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL + 'question',
      method: 'GET'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });

  it('should get data updateComment', () => {
    service.updateComment('param').subscribe(res => {
      expect(res).toBe('pan');
    });
    const req = backend.expectOne({
      url: CommentService.URL ,
      method: 'PUT'
    });
    req.flush('pan', { status: 200, statusText: 'ok' });
  });


  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });
});


