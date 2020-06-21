import { TestBed } from '@angular/core/testing';

import { NgxMousetrapService } from './ngx-mousetrap.service';

describe('NgxMousetrapService', () => {
  let service: NgxMousetrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMousetrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
