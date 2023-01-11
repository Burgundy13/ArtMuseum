import { TestBed } from '@angular/core/testing';

import { ArtmuseumService } from './artmuseum.service';

describe('ArtmuseumService', () => {
  let service: ArtmuseumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtmuseumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
