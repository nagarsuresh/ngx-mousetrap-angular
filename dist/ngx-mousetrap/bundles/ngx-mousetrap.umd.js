(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('mousetrap')) :
    typeof define === 'function' && define.amd ? define('ngx-mousetrap', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'mousetrap'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-mousetrap'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.Mousetrap));
}(this, (function (exports, i0, rxjs, operators, Mousetrap) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var Mousetrap__namespace = /*#__PURE__*/_interopNamespace(Mousetrap);

    var NgxMousetrapService = /** @class */ (function () {
        function NgxMousetrapService() {
            var _this = this;
            this.scopedMouseTrap = new WeakMap();
            // map of keycombination and hotkey details.
            this.keyMap = new Map();
            this.paused = false;
            this.mousetrap = new Mousetrap__namespace();
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
                return rxjs.EMPTY;
            }
            var keyMap = this.keyMap;
            var mousetrapInstance = this.mousetrap;
            if (scope) {
                if (!this.scopedMouseTrap.has(scope)) {
                    keyMap = new Map();
                    mousetrapInstance = new Mousetrap__namespace(scope);
                    this.scopedMouseTrap.set(scope, { keyMap: keyMap, mousetrap: mousetrapInstance });
                }
                else {
                    mousetrapInstance = this.scopedMouseTrap.get(scope).mousetrap;
                    keyMap = this.scopedMouseTrap.get(scope).keyMap;
                }
            }
            if (keyMap.has(key)) {
                return keyMap.get(key).handler$.asObservable().pipe(operators.throttleTime(300));
            }
            var handler$ = new rxjs.Subject();
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
            return handler$.asObservable().pipe(operators.throttleTime(300));
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
        return NgxMousetrapService;
    }());
    NgxMousetrapService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function NgxMousetrapService_Factory() { return new NgxMousetrapService(); }, token: NgxMousetrapService, providedIn: "root" });
    NgxMousetrapService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxMousetrapService.ctorParameters = function () { return []; };

    var NgxMousetrapDirective = /** @class */ (function () {
        function NgxMousetrapDirective(elementRef, ngxMousetrapService) {
            this.elementRef = elementRef;
            this.ngxMousetrapService = ngxMousetrapService;
            // emits an event when hotkey is pressed.
            this.mousetrapKeyPressed = new i0.EventEmitter();
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
        return NgxMousetrapDirective;
    }());
    NgxMousetrapDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ngxMousetrapKey]'
                },] }
    ];
    NgxMousetrapDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: NgxMousetrapService }
    ]; };
    NgxMousetrapDirective.propDecorators = {
        ngxMousetrapKey: [{ type: i0.Input }],
        suppressAutoClick: [{ type: i0.Input }],
        mousetrapKeyPressed: [{ type: i0.Output }]
    };

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
        return NgxMousetrapModule;
    }());
    NgxMousetrapModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NgxMousetrapDirective],
                    imports: [],
                    exports: [NgxMousetrapDirective],
                    providers: [NgxMousetrapService]
                },] }
    ];

    /*
     * Public API Surface of ngx-mousetrap
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxMousetrapDirective = NgxMousetrapDirective;
    exports.NgxMousetrapModule = NgxMousetrapModule;
    exports.NgxMousetrapService = NgxMousetrapService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-mousetrap.umd.js.map
