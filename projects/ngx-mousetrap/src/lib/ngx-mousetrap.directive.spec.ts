import { NgxMousetrapDirective } from './ngx-mousetrap.directive';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';


@Component({
  selector: 'lib-test-hotkey-directive',
  template: `
    <button (click)="clicked()" [paceHotkey]="hotKey" *ngIf="displayButton"
      [suppressAutoClick]="suppressAutoClick">Click Me</button>
  `,
  providers: []
})
class TestHotKeyDirectiveComponent {
  hotKey = 'enter';
  suppressAutoClick = false;
  displayButton = true;

  @ViewChild(NgxMousetrapDirective, { static: false }) directive: NgxMousetrapDirective;

  clicked() { }
}

describe('NgxMousetrapDirective', () => {
  let component: TestHotKeyDirectiveComponent;
  let fixture: ComponentFixture<TestHotKeyDirectiveComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHotKeyDirectiveComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHotKeyDirectiveComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    expect(component.directive).toBeTruthy();
  });

  it('should have clicked button on hotkey press if suppressAutoClick is false', () => {
    const spy = spyOn(component, 'clicked').and.callThrough();

    const event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    // tslint:disable-next-line: no-string-literal
    event['keyCode'] = 13;

    document.body.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();

  });

  it('should NOT have clicked button on hotkey press if suppressAutoClick is true', () => {
    component.suppressAutoClick = true;
    fixture.detectChanges();

    const spy = spyOn(component, 'clicked').and.callThrough();

    const event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    // tslint:disable-next-line: no-string-literal
    event['keyCode'] = 13;

    document.body.dispatchEvent(event);

    expect(spy).not.toHaveBeenCalled();

  });


  it('should NOT have emitted any hot key event if not hotkey is provided', () => {
    component.displayButton = false;
    fixture.detectChanges();
    component.hotKey = null;
    component.displayButton = true;
    fixture.detectChanges();

    const spy = spyOn(component, 'clicked').and.callThrough();

    const event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    // tslint:disable-next-line: no-string-literal
    event['keyCode'] = 13;

    document.body.dispatchEvent(event);

    expect(spy).not.toHaveBeenCalled();

  });



  it('should emit event if hotkey is pressed pressed.', (done) => {
    component.directive.mousetrapKeyPressed.subscribe((evt) => {
      expect(evt).toBeTruthy();
      done();
    });

    // why not using document.createEvent('KeyboardEvent) ?
    // https://stackoverflow.com/questions/961532/firing-a-keyboard-event-in-javascript#comment-44022523
    // there is no option to set the keyCode property and chrome has a bug to not fill this property
    // from key and code properties which are 'Enter'.
    // also which property is always 0 with KeyboardEvent.
    const event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    // tslint:disable-next-line: no-string-literal
    event['keyCode'] = 13;

    document.body.dispatchEvent(event);
  });

});
