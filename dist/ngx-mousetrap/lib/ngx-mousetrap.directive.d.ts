import { EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgxKeyEvent } from './utils';
import { NgxMousetrapService } from './ngx-mousetrap.service';
export declare class NgxMousetrapDirective implements OnInit, OnDestroy {
    private elementRef;
    private ngxMousetrapService;
    ngxMousetrapKey: string;
    suppressAutoClick: boolean;
    mousetrapKeyPressed: EventEmitter<NgxKeyEvent>;
    constructor(elementRef: ElementRef, ngxMousetrapService: NgxMousetrapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
