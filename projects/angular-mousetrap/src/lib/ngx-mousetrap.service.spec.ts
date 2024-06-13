import { TestBed } from '@angular/core/testing';

import { NgxMousetrapService } from './ngx-mousetrap.service';
import { EMPTY } from 'rxjs';

describe('NgxMousetrapService', () => {
  let ngxService: NgxMousetrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    ngxService = TestBed.inject(NgxMousetrapService);
  });

  it('should be created', () => {
    const service: NgxMousetrapService = TestBed.inject(NgxMousetrapService);
    expect(service).toBeTruthy();
  });

  it('should return empty observable if null hotkey is passed', () => {
    const service: NgxMousetrapService = TestBed.inject(NgxMousetrapService);
    const observable = service.register(null);
    expect(observable).toBe(EMPTY);
  });

  it('should return non null observable if key is registered', () => {
    const service: NgxMousetrapService = TestBed.inject(NgxMousetrapService);
    const observable = service.register('command+enter | alt+enter');
    expect(observable).toBeTruthy();
  });

  it('should return non empty observable if key is registered', () => {
    const service: NgxMousetrapService = TestBed.inject(NgxMousetrapService);
    const observable = service.register('command+enter | alt+enter');
    expect(observable).not.toBe(EMPTY);
  });

  it('should unregister key and complete observable', (done) => {
    const service: NgxMousetrapService = TestBed.inject(NgxMousetrapService);
    const observable = service.register('command+enter | alt+enter');
    service.unregister(null, 'command+enter | alt+enter');
    observable.subscribe(() => { }, () => { }, () => {
      // it should have just reached here i.e. it should have completed the observable
      expect(true).toBeTruthy();
      done();
    });
  });

  it('should not throw error if null key is passed to unregister', () => {
    const service: NgxMousetrapService = TestBed.inject(NgxMousetrapService);
    service.unregister();

    // should have reached here without error.
    expect(true).toBeTruthy();
  });
});
