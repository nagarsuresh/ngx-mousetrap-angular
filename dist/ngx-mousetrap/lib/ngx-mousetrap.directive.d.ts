import { EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgxKeyEvent } from './utils';
import { NgxMousetrapService } from './ngx-mousetrap.service';
import * as i0 from "@angular/core";
export declare class NgxMousetrapDirective implements OnInit, OnDestroy {
    private elementRef;
    private ngxMousetrapService;
    ngxMousetrapKey: string;
    suppressAutoClick: boolean;
    mousetrapKeyPressed: EventEmitter<NgxKeyEvent>;
    constructor(elementRef: ElementRef, ngxMousetrapService: NgxMousetrapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxMousetrapDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxMousetrapDirective, "[ngxMousetrapKey]", never, { "ngxMousetrapKey": "ngxMousetrapKey"; "suppressAutoClick": "suppressAutoClick"; }, { "mousetrapKeyPressed": "mousetrapKeyPressed"; }, never>;
}
//# sourceMappingURL=ngx-mousetrap.directive.d.ts.map