import { Directive, Input, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgxKeyEvent } from './utils';
import { NgxMousetrapService } from './ngx-mousetrap.service';

@Directive({
  selector: '[ngxMousetrap]'
})
export class NgxMousetrapDirective implements OnInit, OnDestroy {
  // list of hot key combination for this element.
  @Input() mousetrapKey: string;

  // by default simulate click event on the element if hotkey is pressed.
  // use this flag to turn off the behavior
  @Input() suppressAutoClick: boolean;

  // emits an event when hotkey is pressed.
  @Output() mousetrapKeyPressed: EventEmitter<NgxKeyEvent> = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private ngxMousetrapService: NgxMousetrapService) {
  }

  ngOnInit() {
    if (!this.mousetrapKey) {
      console.error(`No hotkey available for ${this.elementRef.nativeElement}`);
      return;
    }

    this.ngxMousetrapService.register(this.mousetrapKey).subscribe(hkEvent => {
      if (!this.suppressAutoClick) {
        (this.elementRef.nativeElement as HTMLElement).dispatchEvent(new Event('click'));
      }
      this.mousetrapKeyPressed.emit(hkEvent);
    });
  }

  ngOnDestroy() {
    if (this.mousetrapKey) {
      this.ngxMousetrapService.unregister(null, this.mousetrapKey);
    }
  }

}
