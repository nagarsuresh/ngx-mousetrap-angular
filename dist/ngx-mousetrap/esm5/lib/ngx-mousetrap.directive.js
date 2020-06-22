import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgxMousetrapService } from './ngx-mousetrap.service';
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
    NgxMousetrapDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgxMousetrapService }
    ]; };
    __decorate([
        Input()
    ], NgxMousetrapDirective.prototype, "ngxMousetrapKey", void 0);
    __decorate([
        Input()
    ], NgxMousetrapDirective.prototype, "suppressAutoClick", void 0);
    __decorate([
        Output()
    ], NgxMousetrapDirective.prototype, "mousetrapKeyPressed", void 0);
    NgxMousetrapDirective = __decorate([
        Directive({
            selector: '[ngxMousetrapKey]'
        })
    ], NgxMousetrapDirective);
    return NgxMousetrapDirective;
}());
export { NgxMousetrapDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW91c2V0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1tb3VzZXRyYXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzlEO0lBV0UsK0JBQ1UsVUFBc0IsRUFDdEIsbUJBQXdDO1FBRHhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUxsRCx5Q0FBeUM7UUFDL0Isd0JBQW1CLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUM7SUFLOUUsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTJCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBZSxDQUFDLENBQUM7WUFDMUUsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUN2RSxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQTZCLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbEY7WUFDRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQzs7Z0JBdEJxQixVQUFVO2dCQUNELG1CQUFtQjs7SUFYekM7UUFBUixLQUFLLEVBQUU7a0VBQXlCO0lBSXhCO1FBQVIsS0FBSyxFQUFFO29FQUE0QjtJQUcxQjtRQUFULE1BQU0sRUFBRTtzRUFBcUU7SUFUbkUscUJBQXFCO1FBSGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztPQUNXLHFCQUFxQixDQW9DakM7SUFBRCw0QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4S2V5RXZlbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IE5neE1vdXNldHJhcFNlcnZpY2UgfSBmcm9tICcuL25neC1tb3VzZXRyYXAuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hNb3VzZXRyYXBLZXldJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNb3VzZXRyYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8vIGxpc3Qgb2YgaG90IGtleSBjb21iaW5hdGlvbiBmb3IgdGhpcyBlbGVtZW50LlxuICBASW5wdXQoKSBuZ3hNb3VzZXRyYXBLZXk6IHN0cmluZztcblxuICAvLyBieSBkZWZhdWx0IHNpbXVsYXRlIGNsaWNrIGV2ZW50IG9uIHRoZSBlbGVtZW50IGlmIGhvdGtleSBpcyBwcmVzc2VkLlxuICAvLyB1c2UgdGhpcyBmbGFnIHRvIHR1cm4gb2ZmIHRoZSBiZWhhdmlvclxuICBASW5wdXQoKSBzdXBwcmVzc0F1dG9DbGljazogYm9vbGVhbjtcblxuICAvLyBlbWl0cyBhbiBldmVudCB3aGVuIGhvdGtleSBpcyBwcmVzc2VkLlxuICBAT3V0cHV0KCkgbW91c2V0cmFwS2V5UHJlc3NlZDogRXZlbnRFbWl0dGVyPE5neEtleUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ3hNb3VzZXRyYXBTZXJ2aWNlOiBOZ3hNb3VzZXRyYXBTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubmd4TW91c2V0cmFwS2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBObyBob3RrZXkgYXZhaWxhYmxlIGZvciAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50fWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmd4TW91c2V0cmFwU2VydmljZS5yZWdpc3Rlcih0aGlzLm5neE1vdXNldHJhcEtleSkuc3Vic2NyaWJlKGhrRXZlbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN1cHByZXNzQXV0b0NsaWNrKSB7XG4gICAgICAgICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgfVxuICAgICAgdGhpcy5tb3VzZXRyYXBLZXlQcmVzc2VkLmVtaXQoaGtFdmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5uZ3hNb3VzZXRyYXBLZXkpIHtcbiAgICAgIHRoaXMubmd4TW91c2V0cmFwU2VydmljZS51bnJlZ2lzdGVyKG51bGwsIHRoaXMubmd4TW91c2V0cmFwS2V5KTtcbiAgICB9XG4gIH1cblxufVxuIl19