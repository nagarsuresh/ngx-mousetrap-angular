import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, Directive, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as Mousetrap from 'mousetrap';

var NgxMousetrapService = /** @class */ (function () {
    function NgxMousetrapService() {
        var _this = this;
        this.scopedMouseTrap = new WeakMap();
        // map of keycombination and hotkey details.
        this.keyMap = new Map();
        this.paused = false;
        this.mousetrap = new Mousetrap();
        var origninalCB = this.mousetrap.stopCallback;
        this.mousetrap.stopCallback = function (e, element, combo) {
            if (_this.paused) {
                return true;
            }
            return origninalCB.apply(_this.mousetrap, [e, element, combo]);
        };
    }
    /**
     * Registers the hot key combinations and returns an observable which will be
     * triggred when hotkey combination is pressed
     * @param keys list of hotkey combinations
     */
    NgxMousetrapService.prototype.register = function (key, scope) {
        if (!key) {
            return EMPTY;
        }
        var keyMap = this.keyMap;
        var mousetrapInstance = this.mousetrap;
        if (scope) {
            if (!this.scopedMouseTrap.has(scope)) {
                keyMap = new Map();
                mousetrapInstance = new Mousetrap(scope);
                this.scopedMouseTrap.set(scope, { keyMap: keyMap, mousetrap: mousetrapInstance });
            }
            else {
                mousetrapInstance = this.scopedMouseTrap.get(scope).mousetrap;
                keyMap = this.scopedMouseTrap.get(scope).keyMap;
            }
        }
        if (keyMap.has(key)) {
            return keyMap.get(key).handler$.asObservable().pipe(throttleTime(300));
        }
        var handler$ = new Subject();
        var keyCombos = key.split('|').map(function (part) { return part.trim(); });
        // bind the key to mousetrap
        mousetrapInstance.bind(keyCombos, function (e, combo) {
            handler$.next({
                key: combo,
                event: e
            });
        });
        var value = { handler$: handler$ };
        keyMap.set(key, value);
        // throttle the key press.
        return handler$.asObservable().pipe(throttleTime(300));
    };
    /**
     * unregister the keys.
     * @param keys list of key combnations
     */
    NgxMousetrapService.prototype.unregister = function (scope) {
        var _this = this;
        if (scope === void 0) { scope = null; }
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        var mousetrap = this.mousetrap;
        var keyMap = this.keyMap;
        var keysList = keys;
        if (scope && this.scopedMouseTrap.has(scope)) {
            mousetrap = this.scopedMouseTrap.get(scope).mousetrap;
            keyMap = this.scopedMouseTrap.get(scope).keyMap;
            if (!keys || keys.length === 0) {
                keysList = Array.from(this.scopedMouseTrap.get(scope).keyMap.keys());
            }
        }
        if (!keysList || keysList.length === 0) {
            return;
        }
        keysList.forEach(function (k) { return _this._unregister(k, mousetrap, keyMap); });
    };
    /**
     * unregister the given key combination.
     * if the key is the last key for the observable, the complete the observable.
     * @param key key combination
     * @param mousetrap mousetrap instance
     * @param keyMap key map
     */
    NgxMousetrapService.prototype._unregister = function (key, mousetrap, keyMap) {
        mousetrap.unbind(key);
        if (keyMap.has(key)) {
            var value = keyMap.get(key);
            value.handler$.complete();
            keyMap.delete(key);
        }
    };
    NgxMousetrapService.ɵfac = function NgxMousetrapService_Factory(t) { return new (t || NgxMousetrapService)(); };
    NgxMousetrapService.ɵprov = ɵɵdefineInjectable({ token: NgxMousetrapService, factory: NgxMousetrapService.ɵfac, providedIn: 'root' });
    return NgxMousetrapService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxMousetrapService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
    NgxMousetrapDirective.ɵfac = function NgxMousetrapDirective_Factory(t) { return new (t || NgxMousetrapDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxMousetrapService)); };
    NgxMousetrapDirective.ɵdir = ɵɵdefineDirective({ type: NgxMousetrapDirective, selectors: [["", "ngxMousetrapKey", ""]], inputs: { ngxMousetrapKey: "ngxMousetrapKey", suppressAutoClick: "suppressAutoClick" }, outputs: { mousetrapKeyPressed: "mousetrapKeyPressed" } });
    return NgxMousetrapDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxMousetrapDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMousetrapKey]'
            }]
    }], function () { return [{ type: ElementRef }, { type: NgxMousetrapService }]; }, { ngxMousetrapKey: [{
            type: Input
        }], suppressAutoClick: [{
            type: Input
        }], mousetrapKeyPressed: [{
            type: Output
        }] }); })();

var NgxMousetrapModule = /** @class */ (function () {
    function NgxMousetrapModule() {
    }
    NgxMousetrapModule.forRoot = function () {
        return {
            ngModule: NgxMousetrapModule,
            providers: [
                NgxMousetrapService
            ]
        };
    };
    NgxMousetrapModule.ɵmod = ɵɵdefineNgModule({ type: NgxMousetrapModule });
    NgxMousetrapModule.ɵinj = ɵɵdefineInjector({ factory: function NgxMousetrapModule_Factory(t) { return new (t || NgxMousetrapModule)(); }, providers: [NgxMousetrapService], imports: [[]] });
    return NgxMousetrapModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxMousetrapModule, { declarations: [NgxMousetrapDirective], exports: [NgxMousetrapDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxMousetrapModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxMousetrapDirective],
                imports: [],
                exports: [NgxMousetrapDirective],
                providers: [NgxMousetrapService]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-mousetrap
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxMousetrapDirective, NgxMousetrapModule, NgxMousetrapService };
//# sourceMappingURL=ngx-mousetrap.js.map
