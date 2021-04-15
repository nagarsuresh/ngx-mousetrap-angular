import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgxMousetrapService } from './ngx-mousetrap.service';
export class NgxMousetrapDirective {
    constructor(elementRef, ngxMousetrapService) {
        this.elementRef = elementRef;
        this.ngxMousetrapService = ngxMousetrapService;
        // emits an event when hotkey is pressed.
        this.mousetrapKeyPressed = new EventEmitter();
    }
    ngOnInit() {
        if (!this.ngxMousetrapKey) {
            console.error(`No hotkey available for ${this.elementRef.nativeElement}`);
            return;
        }
        this.ngxMousetrapService.register(this.ngxMousetrapKey).subscribe(hkEvent => {
            if (!this.suppressAutoClick) {
                this.elementRef.nativeElement.dispatchEvent(new Event('click'));
            }
            this.mousetrapKeyPressed.emit(hkEvent);
        });
    }
    ngOnDestroy() {
        if (this.ngxMousetrapKey) {
            this.ngxMousetrapService.unregister(null, this.ngxMousetrapKey);
        }
    }
}
NgxMousetrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMousetrapKey]'
            },] }
];
NgxMousetrapDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgxMousetrapService }
];
NgxMousetrapDirective.propDecorators = {
    ngxMousetrapKey: [{ type: Input }],
    suppressAutoClick: [{ type: Input }],
    mousetrapKeyPressed: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbW91c2V0cmFwL3NyYy9saWIvbmd4LW1vdXNldHJhcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzlELE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFDVSxVQUFzQixFQUN0QixtQkFBd0M7UUFEeEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTGxELHlDQUF5QztRQUMvQix3QkFBbUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUs5RSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUMxRSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE2QixDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7O1lBTmdELFVBQVU7WUFFbEQsbUJBQW1COzs7OEJBT3pCLEtBQUs7Z0NBSUwsS0FBSztrQ0FHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hLZXlFdmVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwU2VydmljZSB9IGZyb20gJy4vbmd4LW1vdXNldHJhcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neE1vdXNldHJhcEtleV0nXG59KVxuZXhwb3J0IGNsYXNzIE5neE1vdXNldHJhcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gbGlzdCBvZiBob3Qga2V5IGNvbWJpbmF0aW9uIGZvciB0aGlzIGVsZW1lbnQuXG4gIEBJbnB1dCgpIG5neE1vdXNldHJhcEtleTogc3RyaW5nO1xuXG4gIC8vIGJ5IGRlZmF1bHQgc2ltdWxhdGUgY2xpY2sgZXZlbnQgb24gdGhlIGVsZW1lbnQgaWYgaG90a2V5IGlzIHByZXNzZWQuXG4gIC8vIHVzZSB0aGlzIGZsYWcgdG8gdHVybiBvZmYgdGhlIGJlaGF2aW9yXG4gIEBJbnB1dCgpIHN1cHByZXNzQXV0b0NsaWNrOiBib29sZWFuO1xuXG4gIC8vIGVtaXRzIGFuIGV2ZW50IHdoZW4gaG90a2V5IGlzIHByZXNzZWQuXG4gIEBPdXRwdXQoKSBtb3VzZXRyYXBLZXlQcmVzc2VkOiBFdmVudEVtaXR0ZXI8Tmd4S2V5RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5neE1vdXNldHJhcFNlcnZpY2U6IE5neE1vdXNldHJhcFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5uZ3hNb3VzZXRyYXBLZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIGhvdGtleSBhdmFpbGFibGUgZm9yICR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnR9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZ3hNb3VzZXRyYXBTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMubmd4TW91c2V0cmFwS2V5KS5zdWJzY3JpYmUoaGtFdmVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3VwcHJlc3NBdXRvQ2xpY2spIHtcbiAgICAgICAgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vdXNldHJhcEtleVByZXNzZWQuZW1pdChoa0V2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm5neE1vdXNldHJhcEtleSkge1xuICAgICAgdGhpcy5uZ3hNb3VzZXRyYXBTZXJ2aWNlLnVucmVnaXN0ZXIobnVsbCwgdGhpcy5uZ3hNb3VzZXRyYXBLZXkpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=