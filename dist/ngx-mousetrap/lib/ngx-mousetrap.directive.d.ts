import { EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgxKeyEvent } from './utils';
import { NgxMousetrapService } from './ngx-mousetrap.service';
import * as ɵngcc0 from '@angular/core';
export declare class NgxMousetrapDirective implements OnInit, OnDestroy {
    private elementRef;
    private ngxMousetrapService;
    ngxMousetrapKey: string;
    suppressAutoClick: boolean;
    mousetrapKeyPressed: EventEmitter<NgxKeyEvent>;
    constructor(elementRef: ElementRef, ngxMousetrapService: NgxMousetrapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxMousetrapDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgxMousetrapDirective, "[ngxMousetrapKey]", never, {
    "ngxMousetrapKey": "ngxMousetrapKey";
    "suppressAutoClick": "suppressAutoClick";
}, {
    "mousetrapKeyPressed": "mousetrapKeyPressed";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibmd4LW1vdXNldHJhcC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBU0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hLZXlFdmVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgTmd4TW91c2V0cmFwU2VydmljZSB9IGZyb20gJy4vbmd4LW1vdXNldHJhcC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5neE1vdXNldHJhcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBuZ3hNb3VzZXRyYXBTZXJ2aWNlO1xuICAgIG5neE1vdXNldHJhcEtleTogc3RyaW5nO1xuICAgIHN1cHByZXNzQXV0b0NsaWNrOiBib29sZWFuO1xuICAgIG1vdXNldHJhcEtleVByZXNzZWQ6IEV2ZW50RW1pdHRlcjxOZ3hLZXlFdmVudD47XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmd4TW91c2V0cmFwU2VydmljZTogTmd4TW91c2V0cmFwU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19