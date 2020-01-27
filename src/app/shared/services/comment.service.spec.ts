import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentService } from './comment.service';

describe('CommentService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CommentService]
  }));


  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });
});


