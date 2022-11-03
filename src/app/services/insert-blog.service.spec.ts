import { TestBed } from '@angular/core/testing';

import { InsertBlogService } from './insert-blog.service';

describe('InsertBlogService', () => {
  let service: InsertBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
