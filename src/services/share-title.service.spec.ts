import { TestBed } from '@angular/core/testing';

import { ShareTitleService } from './share-title.service';

describe('ShareTitleService', () => {
  let service: ShareTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
