import { Directive, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-mousetrap.service";
var NgxMousetrapDirective = /** @class */ (function () {
    function NgxMousetrapDirective(elementRef, ngxMousetrapService) {
        this.elementRef = elementRef;
        this.ngxMousetrapService = ngxMousetrapService;
        // emits an event when hotkey is pressed.
        this.mousetrapKeyPressed = new EventEmitter();
    }
    NgxMousetrapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.ngxMousetrapKey) {
            console.error("No hotkey available for " + this.elementRef.nativeElement);
            return;
        }
        this.ngxMousetrapService.register(this.ngxMousetrapKey).subscribe(function (hkEvent) {
            if (!_this.suppressAutoClick) {
                _this.elementRef.nativeElement.dispatchEvent(new Event('click'));
            }
            _this.mousetrapKeyPressed.emit(hkEvent);
        });
    };
    NgxMousetrapDirective.prototype.ngOnDestroy = function () {
        if (this.ngxMousetrapKey) {
            this.ngxMousetrapService.unregister(null, this.ngxMousetrapKey);
        }
    };
    NgxMousetrapDirective.ɵfac = function NgxMousetrapDirective_Factory(t) { return new (t || NgxMousetrapDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NgxMousetrapService)); };
    NgxMousetrapDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxMousetrapDirective, selectors: [["", "ngxMousetrapKey", ""]], inputs: { ngxMousetrapKey: "ngxMousetrapKey", suppressAutoClick: "suppressAutoClick" }, outputs: { mousetrapKeyPressed: "mousetrapKeyPressed" } });
    return NgxMousetrapDirective;
}());
export { NgxMousetrapDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxMousetrapDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMousetrapKey]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NgxMousetrapService }]; }, { ngxMousetrapKey: [{
            type: Input
        }], suppressAutoClick: [{
            type: Input
        }], mousetrapKeyPressed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW91c2V0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1tb3VzZXRyYXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlDLE1BQU0sZUFBZSxDQUFDOzs7QUFJdEc7SUFjRSwrQkFDVSxVQUFzQixFQUN0QixtQkFBd0M7UUFEeEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTGxELHlDQUF5QztRQUMvQix3QkFBbUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUs5RSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBMkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFlLENBQUMsQ0FBQztZQUMxRSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ3ZFLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBNkIsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzhGQWxDVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtnQ0FQbEM7Q0EyQ0MsQUF2Q0QsSUF1Q0M7U0FwQ1kscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FIakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7O2tCQUdFLEtBQUs7O2tCQUlMLEtBQUs7O2tCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEtleUV2ZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBOZ3hNb3VzZXRyYXBTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4TW91c2V0cmFwS2V5XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TW91c2V0cmFwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyBsaXN0IG9mIGhvdCBrZXkgY29tYmluYXRpb24gZm9yIHRoaXMgZWxlbWVudC5cbiAgQElucHV0KCkgbmd4TW91c2V0cmFwS2V5OiBzdHJpbmc7XG5cbiAgLy8gYnkgZGVmYXVsdCBzaW11bGF0ZSBjbGljayBldmVudCBvbiB0aGUgZWxlbWVudCBpZiBob3RrZXkgaXMgcHJlc3NlZC5cbiAgLy8gdXNlIHRoaXMgZmxhZyB0byB0dXJuIG9mZiB0aGUgYmVoYXZpb3JcbiAgQElucHV0KCkgc3VwcHJlc3NBdXRvQ2xpY2s6IGJvb2xlYW47XG5cbiAgLy8gZW1pdHMgYW4gZXZlbnQgd2hlbiBob3RrZXkgaXMgcHJlc3NlZC5cbiAgQE91dHB1dCgpIG1vdXNldHJhcEtleVByZXNzZWQ6IEV2ZW50RW1pdHRlcjxOZ3hLZXlFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmd4TW91c2V0cmFwU2VydmljZTogTmd4TW91c2V0cmFwU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLm5neE1vdXNldHJhcEtleSkge1xuICAgICAgY29uc29sZS5lcnJvcihgTm8gaG90a2V5IGF2YWlsYWJsZSBmb3IgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5neE1vdXNldHJhcFNlcnZpY2UucmVnaXN0ZXIodGhpcy5uZ3hNb3VzZXRyYXBLZXkpLnN1YnNjcmliZShoa0V2ZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5zdXBwcmVzc0F1dG9DbGljaykge1xuICAgICAgICAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW91c2V0cmFwS2V5UHJlc3NlZC5lbWl0KGhrRXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubmd4TW91c2V0cmFwS2V5KSB7XG4gICAgICB0aGlzLm5neE1vdXNldHJhcFNlcnZpY2UudW5yZWdpc3RlcihudWxsLCB0aGlzLm5neE1vdXNldHJhcEtleSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==