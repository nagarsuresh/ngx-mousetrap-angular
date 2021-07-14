(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_mousetrap_angular"] = self["webpackChunkngx_mousetrap_angular"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    73016:
    /*!*******************************************************************!*\
      !*** ./dist/ngx-mousetrap/__ivy_ngcc__/fesm2015/ngx-mousetrap.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMousetrapDirective": function NgxMousetrapDirective() {
          return (
            /* binding */
            _NgxMousetrapDirective
          );
        },

        /* harmony export */
        "NgxMousetrapModule": function NgxMousetrapModule() {
          return (
            /* binding */
            _NgxMousetrapModule
          );
        },

        /* harmony export */
        "NgxMousetrapService": function NgxMousetrapService() {
          return (
            /* binding */
            _NgxMousetrapService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      59193);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      93137);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! mousetrap */
      13544);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_0__);

      var _NgxMousetrapService = /*#__PURE__*/function () {
        function _NgxMousetrapService() {
          var _this = this;

          _classCallCheck(this, _NgxMousetrapService);

          this.scopedMouseTrap = new WeakMap(); // map of keycombination and hotkey details.

          this.keyMap = new Map();
          this.paused = false;
          this.mousetrap = new mousetrap__WEBPACK_IMPORTED_MODULE_0__();
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


        _createClass(_NgxMousetrapService, [{
          key: "register",
          value: function register(key, scope) {
            if (!key) {
              return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            }

            var keyMap = this.keyMap;
            var mousetrapInstance = this.mousetrap;

            if (scope) {
              if (!this.scopedMouseTrap.has(scope)) {
                keyMap = new Map();
                mousetrapInstance = new mousetrap__WEBPACK_IMPORTED_MODULE_0__(scope);
                this.scopedMouseTrap.set(scope, {
                  keyMap: keyMap,
                  mousetrap: mousetrapInstance
                });
              } else {
                mousetrapInstance = this.scopedMouseTrap.get(scope).mousetrap;
                keyMap = this.scopedMouseTrap.get(scope).keyMap;
              }
            }

            if (keyMap.has(key)) {
              return keyMap.get(key).handler$.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(300));
            }

            var handler$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            var keyCombos = key.split('|').map(function (part) {
              return part.trim();
            }); // bind the key to mousetrap

            mousetrapInstance.bind(keyCombos, function (e, combo) {
              handler$.next({
                key: combo,
                event: e
              });
            });
            var value = {
              handler$: handler$
            };
            keyMap.set(key, value); // throttle the key press.

            return handler$.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(300));
          }
          /**
           * unregister the keys.
           * @param keys list of key combnations
           */

        }, {
          key: "unregister",
          value: function unregister() {
            var _this2 = this;

            var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              keys[_key - 1] = arguments[_key];
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

            keysList.forEach(function (k) {
              return _this2._unregister(k, mousetrap, keyMap);
            });
          }
          /**
           * unregister the given key combination.
           * if the key is the last key for the observable, the complete the observable.
           * @param key key combination
           * @param mousetrap mousetrap instance
           * @param keyMap key map
           */

        }, {
          key: "_unregister",
          value: function _unregister(key, mousetrap, keyMap) {
            mousetrap.unbind(key);

            if (keyMap.has(key)) {
              var value = keyMap.get(key);
              value.handler$.complete();
              keyMap["delete"](key);
            }
          }
        }]);

        return _NgxMousetrapService;
      }();

      _NgxMousetrapService.ɵfac = function NgxMousetrapService_Factory(t) {
        return new (t || _NgxMousetrapService)();
      };

      _NgxMousetrapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function NgxMousetrapService_Factory() {
          return new _NgxMousetrapService();
        },
        token: _NgxMousetrapService,
        providedIn: "root"
      });

      _NgxMousetrapService.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_NgxMousetrapService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var _NgxMousetrapDirective = /*#__PURE__*/function () {
        function _NgxMousetrapDirective(elementRef, ngxMousetrapService) {
          _classCallCheck(this, _NgxMousetrapDirective);

          this.elementRef = elementRef;
          this.ngxMousetrapService = ngxMousetrapService; // emits an event when hotkey is pressed.

          this.mousetrapKeyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(_NgxMousetrapDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (!this.ngxMousetrapKey) {
              console.error("No hotkey available for ".concat(this.elementRef.nativeElement));
              return;
            }

            this.ngxMousetrapService.register(this.ngxMousetrapKey).subscribe(function (hkEvent) {
              if (!_this3.suppressAutoClick) {
                _this3.elementRef.nativeElement.dispatchEvent(new Event('click'));
              }

              _this3.mousetrapKeyPressed.emit(hkEvent);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.ngxMousetrapKey) {
              this.ngxMousetrapService.unregister(null, this.ngxMousetrapKey);
            }
          }
        }]);

        return _NgxMousetrapDirective;
      }();

      _NgxMousetrapDirective.ɵfac = function NgxMousetrapDirective_Factory(t) {
        return new (t || _NgxMousetrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_NgxMousetrapService));
      };

      _NgxMousetrapDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: _NgxMousetrapDirective,
        selectors: [["", "ngxMousetrapKey", ""]],
        inputs: {
          ngxMousetrapKey: "ngxMousetrapKey",
          suppressAutoClick: "suppressAutoClick"
        },
        outputs: {
          mousetrapKeyPressed: "mousetrapKeyPressed"
        }
      });

      _NgxMousetrapDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
        }, {
          type: _NgxMousetrapService
        }];
      };

      _NgxMousetrapDirective.propDecorators = {
        ngxMousetrapKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        suppressAutoClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        mousetrapKeyPressed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_NgxMousetrapDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
          args: [{
            selector: '[ngxMousetrapKey]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
          }, {
            type: _NgxMousetrapService
          }];
        }, {
          mousetrapKeyPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
          }],
          ngxMousetrapKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
          }],
          suppressAutoClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
          }]
        });
      })();

      var _NgxMousetrapModule = /*#__PURE__*/function () {
        function _NgxMousetrapModule() {
          _classCallCheck(this, _NgxMousetrapModule);
        }

        _createClass(_NgxMousetrapModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _NgxMousetrapModule,
              providers: [_NgxMousetrapService]
            };
          }
        }]);

        return _NgxMousetrapModule;
      }();

      _NgxMousetrapModule.ɵfac = function NgxMousetrapModule_Factory(t) {
        return new (t || _NgxMousetrapModule)();
      };

      _NgxMousetrapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _NgxMousetrapModule
      });
      _NgxMousetrapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_NgxMousetrapService],
        imports: [[]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_NgxMousetrapModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
          args: [{
            declarations: [_NgxMousetrapDirective],
            imports: [],
            exports: [_NgxMousetrapDirective],
            providers: [_NgxMousetrapService]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_NgxMousetrapModule, {
          declarations: [_NgxMousetrapDirective],
          exports: [_NgxMousetrapDirective]
        });
      })();
      /*
       * Public API Surface of ngx-mousetrap
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    81736:
    /*!*******************************************************************!*\
      !*** ./projects/ngx-mousetrap/src/lib/ngx-mousetrap.directive.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMousetrapDirective": function NgxMousetrapDirective() {
          return (
            /* binding */
            _NgxMousetrapDirective2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ngx-mousetrap.service */
      42438);

      var _NgxMousetrapDirective2 = /*#__PURE__*/function () {
        function _NgxMousetrapDirective2(elementRef, ngxMousetrapService) {
          _classCallCheck(this, _NgxMousetrapDirective2);

          this.elementRef = elementRef;
          this.ngxMousetrapService = ngxMousetrapService; // emits an event when hotkey is pressed.

          this.mousetrapKeyPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_NgxMousetrapDirective2, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            if (!this.ngxMousetrapKey) {
              console.error("No hotkey available for ".concat(this.elementRef.nativeElement));
              return;
            }

            this.ngxMousetrapService.register(this.ngxMousetrapKey).subscribe(function (hkEvent) {
              if (!_this4.suppressAutoClick) {
                _this4.elementRef.nativeElement.dispatchEvent(new Event('click'));
              }

              _this4.mousetrapKeyPressed.emit(hkEvent);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.ngxMousetrapKey) {
              this.ngxMousetrapService.unregister(null, this.ngxMousetrapKey);
            }
          }
        }]);

        return _NgxMousetrapDirective2;
      }();

      _NgxMousetrapDirective2.ɵfac = function NgxMousetrapDirective_Factory(t) {
        return new (t || _NgxMousetrapDirective2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_0__.NgxMousetrapService));
      };

      _NgxMousetrapDirective2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _NgxMousetrapDirective2,
        selectors: [["", "ngxMousetrapKey", ""]],
        inputs: {
          ngxMousetrapKey: "ngxMousetrapKey",
          suppressAutoClick: "suppressAutoClick"
        },
        outputs: {
          mousetrapKeyPressed: "mousetrapKeyPressed"
        }
      });
      /***/
    },

    /***/
    76926:
    /*!****************************************************************!*\
      !*** ./projects/ngx-mousetrap/src/lib/ngx-mousetrap.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMousetrapModule": function NgxMousetrapModule() {
          return (
            /* binding */
            _NgxMousetrapModule2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngx_mousetrap_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ngx-mousetrap.directive */
      81736);
      /* harmony import */


      var _ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngx-mousetrap.service */
      42438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _NgxMousetrapModule2 = /*#__PURE__*/function () {
        function _NgxMousetrapModule2() {
          _classCallCheck(this, _NgxMousetrapModule2);
        }

        _createClass(_NgxMousetrapModule2, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _NgxMousetrapModule2,
              providers: [_ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_1__.NgxMousetrapService]
            };
          }
        }]);

        return _NgxMousetrapModule2;
      }();

      _NgxMousetrapModule2.ɵfac = function NgxMousetrapModule_Factory(t) {
        return new (t || _NgxMousetrapModule2)();
      };

      _NgxMousetrapModule2.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _NgxMousetrapModule2
      });
      _NgxMousetrapModule2.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_1__.NgxMousetrapService],
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_NgxMousetrapModule2, {
          declarations: [_ngx_mousetrap_directive__WEBPACK_IMPORTED_MODULE_0__.NgxMousetrapDirective],
          exports: [_ngx_mousetrap_directive__WEBPACK_IMPORTED_MODULE_0__.NgxMousetrapDirective]
        });
      })();
      /***/

    },

    /***/
    42438:
    /*!*****************************************************************!*\
      !*** ./projects/ngx-mousetrap/src/lib/ngx-mousetrap.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMousetrapService": function NgxMousetrapService() {
          return (
            /* binding */
            _NgxMousetrapService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      59193);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      93137);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! mousetrap */
      13544);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _NgxMousetrapService2 = /*#__PURE__*/function () {
        function _NgxMousetrapService2() {
          var _this5 = this;

          _classCallCheck(this, _NgxMousetrapService2);

          this.scopedMouseTrap = new WeakMap(); // map of keycombination and hotkey details.

          this.keyMap = new Map();
          this.paused = false;
          this.mousetrap = new mousetrap__WEBPACK_IMPORTED_MODULE_0__();
          var origninalCB = this.mousetrap.stopCallback;

          this.mousetrap.stopCallback = function (e, element, combo) {
            if (_this5.paused) {
              return true;
            }

            return origninalCB.apply(_this5.mousetrap, [e, element, combo]);
          };
        }
        /**
         * Registers the hot key combinations and returns an observable which will be
         * triggred when hotkey combination is pressed
         * @param keys list of hotkey combinations
         */


        _createClass(_NgxMousetrapService2, [{
          key: "register",
          value: function register(key, scope) {
            if (!key) {
              return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            }

            var keyMap = this.keyMap;
            var mousetrapInstance = this.mousetrap;

            if (scope) {
              if (!this.scopedMouseTrap.has(scope)) {
                keyMap = new Map();
                mousetrapInstance = new mousetrap__WEBPACK_IMPORTED_MODULE_0__(scope);
                this.scopedMouseTrap.set(scope, {
                  keyMap: keyMap,
                  mousetrap: mousetrapInstance
                });
              } else {
                mousetrapInstance = this.scopedMouseTrap.get(scope).mousetrap;
                keyMap = this.scopedMouseTrap.get(scope).keyMap;
              }
            }

            if (keyMap.has(key)) {
              return keyMap.get(key).handler$.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(300));
            }

            var handler$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            var keyCombos = key.split('|').map(function (part) {
              return part.trim();
            }); // bind the key to mousetrap

            mousetrapInstance.bind(keyCombos, function (e, combo) {
              handler$.next({
                key: combo,
                event: e
              });
            });
            var value = {
              handler$: handler$
            };
            keyMap.set(key, value); // throttle the key press.

            return handler$.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(300));
          }
          /**
           * unregister the keys.
           * @param keys list of key combnations
           */

        }, {
          key: "unregister",
          value: function unregister() {
            var _this6 = this;

            var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              keys[_key2 - 1] = arguments[_key2];
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

            keysList.forEach(function (k) {
              return _this6._unregister(k, mousetrap, keyMap);
            });
          }
          /**
           * unregister the given key combination.
           * if the key is the last key for the observable, the complete the observable.
           * @param key key combination
           * @param mousetrap mousetrap instance
           * @param keyMap key map
           */

        }, {
          key: "_unregister",
          value: function _unregister(key, mousetrap, keyMap) {
            mousetrap.unbind(key);

            if (keyMap.has(key)) {
              var value = keyMap.get(key);
              value.handler$.complete();
              keyMap["delete"](key);
            }
          }
        }]);

        return _NgxMousetrapService2;
      }();

      _NgxMousetrapService2.ɵfac = function NgxMousetrapService_Factory(t) {
        return new (t || _NgxMousetrapService2)();
      };

      _NgxMousetrapService2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _NgxMousetrapService2,
        factory: _NgxMousetrapService2.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    20617:
    /*!**************************************************!*\
      !*** ./projects/ngx-mousetrap/src/public-api.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMousetrapService": function NgxMousetrapService() {
          return (
            /* reexport safe */
            _lib_ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_0__.NgxMousetrapService
          );
        },

        /* harmony export */
        "NgxMousetrapDirective": function NgxMousetrapDirective() {
          return (
            /* reexport safe */
            _lib_ngx_mousetrap_directive__WEBPACK_IMPORTED_MODULE_1__.NgxMousetrapDirective
          );
        },

        /* harmony export */
        "NgxMousetrapModule": function NgxMousetrapModule() {
          return (
            /* reexport safe */
            _lib_ngx_mousetrap_module__WEBPACK_IMPORTED_MODULE_2__.NgxMousetrapModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_ngx_mousetrap_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/ngx-mousetrap.service */
      42438);
      /* harmony import */


      var _lib_ngx_mousetrap_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/ngx-mousetrap.directive */
      81736);
      /* harmony import */


      var _lib_ngx_mousetrap_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/ngx-mousetrap.module */
      76926);
      /*
       * Public API Surface of ngx-mousetrap
       */

      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var projects_ngx_mousetrap_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! projects/ngx-mousetrap/src/public-api */
      20617);
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @clr/angular */
      96675);
      /* harmony import */


      var ngx_mousetrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-mousetrap */
      73016);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["demoArea"];

      function AppComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Clicked at ", ctx_r0.clickedAt, " ");
        }
      }

      function AppComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r3, " ");
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(service) {
          _classCallCheck(this, _AppComponent);

          this.service = service;
          this.title = 'ngx-mousetrap-angular';
          this.clickedAt = null;
          this.keypressed = [];
          this.keysBound = '? | esc | up up down down | command+shift+k | ctrl+s | command+s | alt+r | h e l l o';
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.subscription = this.service.register(this.keysBound, this.demoArea.nativeElement).subscribe(function (evt) {
              _this7.keypressed.push("Detected ".concat(evt.key));
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.clickedAt = new Date();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_ngx_mousetrap_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgxMousetrapService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.demoArea = _t.first);
          }
        },
        decls: 24,
        vars: 4,
        consts: [[1, "main-container"], [1, "header", "header-6"], [1, "branding"], ["href", "javascript:void(0)", 1, "nav-link"], ["shape", "vm-bug"], [1, "title"], [1, "content-container"], [1, "content-area"], [1, "btn", "btn-primary", 3, "ngxMousetrapKey", "click"], [4, "ngIf"], ["tabindex", "0", 1, "service-demo"], ["demoArea", ""], [1, "alert-text"], [4, "ngFor", "ngForOf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "clr-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Project NGX Mousetrap");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Click or press (command/ctrl)+enter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_div_11_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " NgxMousetrap Service Demo Area. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "clr-alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "clr-alert-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Keys are bound only to this area, focus this area before pressing hotkeys. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Following keys are bound ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AppComponent_div_23_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxMousetrapKey", "command+enter | ctrl+enter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clickedAt);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.keysBound, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.keypressed);
          }
        },
        directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__.ClrIconCustomTag, ngx_mousetrap__WEBPACK_IMPORTED_MODULE_3__.NgxMousetrapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _clr_angular__WEBPACK_IMPORTED_MODULE_2__.ClrAlert, _clr_angular__WEBPACK_IMPORTED_MODULE_2__.ClrAlertItem, _clr_angular__WEBPACK_IMPORTED_MODULE_2__.ClrAlertText, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: [".service-demo[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 800px;\n  margin: 0 auto;\n  border: 1px solid;\n  padding: 12px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2UtZGVtbyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var ngx_mousetrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-mousetrap */
      73016);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @clr/angular */
      96675);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, ngx_mousetrap__WEBPACK_IMPORTED_MODULE_3__.NgxMousetrapModule.forRoot(), _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClarityModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, ngx_mousetrap__WEBPACK_IMPORTED_MODULE_3__.NgxMousetrapModule, _clr_angular__WEBPACK_IMPORTED_MODULE_4__.ClarityModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule]
        });
      })();
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map