import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMousetrapComponent } from './ngx-mousetrap.component';

describe('NgxMousetrapComponent', () => {
  let component: NgxMousetrapComponent;
  let fixture: ComponentFixture<NgxMousetrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMousetrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMousetrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
