import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as Mousetrap from 'mousetrap';
import * as i0 from "@angular/core";
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
    NgxMousetrapService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxMousetrapService_Factory() { return new NgxMousetrapService(); }, token: NgxMousetrapService, providedIn: "root" });
    NgxMousetrapService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxMousetrapService);
    return NgxMousetrapService;
}());
export { NgxMousetrapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vdXNldHJhcC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sV0FBVyxDQUFDOztBQUt2QztJQVdFO1FBQUEsaUJBVUM7UUFqQk8sb0JBQWUsR0FBK0YsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwSSw0Q0FBNEM7UUFDcEMsV0FBTSxHQUErQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLO1lBQzlDLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQ0FBUSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxLQUFtQjtRQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDZDtR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QUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN0RTtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLHlDQUFXLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxTQUE0QixFQUFFLE1BQWtDO1FBQy9GLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7SUEzR1UsbUJBQW1CO1FBSC9CLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxtQkFBbUIsQ0E2Ry9COzhCQXRIRDtDQXNIQyxBQTdHRCxJQTZHQztTQTdHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hLZXlIYW5kbGVyLCBOZ3hLZXlFdmVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIE1vdXNldHJhcCBmcm9tICdtb3VzZXRyYXAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNb3VzZXRyYXBTZXJ2aWNlIHtcbiAgLy8gY3VycmVudCBtb3VzZXRyYXAgaW5zdGFuY2VcbiAgcHJpdmF0ZSBtb3VzZXRyYXA6IE1vdXNldHJhcEluc3RhbmNlO1xuXG4gIHByaXZhdGUgc2NvcGVkTW91c2VUcmFwOiBXZWFrTWFwPEhUTUxFbGVtZW50LCB7IG1vdXNldHJhcDogTW91c2V0cmFwSW5zdGFuY2UsIGtleU1hcDogTWFwPHN0cmluZywgTmd4S2V5SGFuZGxlcj4gfT4gPSBuZXcgV2Vha01hcCgpO1xuXG4gIC8vIG1hcCBvZiBrZXljb21iaW5hdGlvbiBhbmQgaG90a2V5IGRldGFpbHMuXG4gIHByaXZhdGUga2V5TWFwOiBNYXA8c3RyaW5nLCBOZ3hLZXlIYW5kbGVyPiA9IG5ldyBNYXAoKTtcblxuICBwdWJsaWMgcGF1c2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb3VzZXRyYXAgPSBuZXcgTW91c2V0cmFwKCk7XG4gICAgY29uc3Qgb3JpZ25pbmFsQ0IgPSB0aGlzLm1vdXNldHJhcC5zdG9wQ2FsbGJhY2s7XG5cbiAgICB0aGlzLm1vdXNldHJhcC5zdG9wQ2FsbGJhY2sgPSAoZSwgZWxlbWVudCwgY29tYm8pID0+IHtcbiAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnbmluYWxDQi5hcHBseSh0aGlzLm1vdXNldHJhcCwgW2UsIGVsZW1lbnQsIGNvbWJvXSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGhvdCBrZXkgY29tYmluYXRpb25zIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgd2hpY2ggd2lsbCBiZVxuICAgKiB0cmlnZ3JlZCB3aGVuIGhvdGtleSBjb21iaW5hdGlvbiBpcyBwcmVzc2VkXG4gICAqIEBwYXJhbSBrZXlzIGxpc3Qgb2YgaG90a2V5IGNvbWJpbmF0aW9uc1xuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyKGtleTogc3RyaW5nLCBzY29wZT86IEhUTUxFbGVtZW50KTogT2JzZXJ2YWJsZTxOZ3hLZXlFdmVudD4ge1xuICAgIGlmICgha2V5KSB7XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfVxuXG4gICAgbGV0IGtleU1hcCA9IHRoaXMua2V5TWFwO1xuICAgIGxldCBtb3VzZXRyYXBJbnN0YW5jZSA9IHRoaXMubW91c2V0cmFwO1xuXG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICBpZiAoIXRoaXMuc2NvcGVkTW91c2VUcmFwLmhhcyhzY29wZSkpIHtcbiAgICAgICAga2V5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBtb3VzZXRyYXBJbnN0YW5jZSA9IG5ldyBNb3VzZXRyYXAoc2NvcGUpO1xuICAgICAgICB0aGlzLnNjb3BlZE1vdXNlVHJhcC5zZXQoc2NvcGUsIHsga2V5TWFwLCBtb3VzZXRyYXA6IG1vdXNldHJhcEluc3RhbmNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW91c2V0cmFwSW5zdGFuY2UgPSB0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLm1vdXNldHJhcDtcbiAgICAgICAga2V5TWFwID0gdGhpcy5zY29wZWRNb3VzZVRyYXAuZ2V0KHNjb3BlKS5rZXlNYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleU1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGtleU1hcC5nZXQoa2V5KS5oYW5kbGVyJC5hc09ic2VydmFibGUoKS5waXBlKHRocm90dGxlVGltZSgzMDApKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyJDogU3ViamVjdDxOZ3hLZXlFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3Qga2V5Q29tYm9zID0ga2V5LnNwbGl0KCd8JykubWFwKHBhcnQgPT4gcGFydC50cmltKCkpO1xuICAgIC8vIGJpbmQgdGhlIGtleSB0byBtb3VzZXRyYXBcbiAgICBtb3VzZXRyYXBJbnN0YW5jZS5iaW5kKGtleUNvbWJvcywgKGUsIGNvbWJvOiBzdHJpbmcpID0+IHtcbiAgICAgIGhhbmRsZXIkLm5leHQoe1xuICAgICAgICBrZXk6IGNvbWJvLFxuICAgICAgICBldmVudDogZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHsgaGFuZGxlciQgfTtcbiAgICBrZXlNYXAuc2V0KGtleSwgdmFsdWUpO1xuXG4gICAgLy8gdGhyb3R0bGUgdGhlIGtleSBwcmVzcy5cbiAgICByZXR1cm4gaGFuZGxlciQuYXNPYnNlcnZhYmxlKCkucGlwZSh0aHJvdHRsZVRpbWUoMzAwKSk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIHVucmVnaXN0ZXIgdGhlIGtleXMuXG4gICAqIEBwYXJhbSBrZXlzIGxpc3Qgb2Yga2V5IGNvbWJuYXRpb25zXG4gICAqL1xuICBwdWJsaWMgdW5yZWdpc3RlcihzY29wZTogSFRNTEVsZW1lbnQgPSBudWxsLCAuLi5rZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGxldCBtb3VzZXRyYXAgPSB0aGlzLm1vdXNldHJhcDtcbiAgICBsZXQga2V5TWFwID0gdGhpcy5rZXlNYXA7XG4gICAgbGV0IGtleXNMaXN0ID0ga2V5cztcblxuICAgIGlmIChzY29wZSAmJiB0aGlzLnNjb3BlZE1vdXNlVHJhcC5oYXMoc2NvcGUpKSB7XG4gICAgICBtb3VzZXRyYXAgPSB0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLm1vdXNldHJhcDtcbiAgICAgIGtleU1hcCA9IHRoaXMuc2NvcGVkTW91c2VUcmFwLmdldChzY29wZSkua2V5TWFwO1xuICAgICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGtleXNMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLmtleU1hcC5rZXlzKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWtleXNMaXN0IHx8IGtleXNMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBrZXlzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fdW5yZWdpc3RlcihrLCBtb3VzZXRyYXAsIGtleU1hcCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVucmVnaXN0ZXIgdGhlIGdpdmVuIGtleSBjb21iaW5hdGlvbi5cbiAgICogaWYgdGhlIGtleSBpcyB0aGUgbGFzdCBrZXkgZm9yIHRoZSBvYnNlcnZhYmxlLCB0aGUgY29tcGxldGUgdGhlIG9ic2VydmFibGUuXG4gICAqIEBwYXJhbSBrZXkga2V5IGNvbWJpbmF0aW9uXG4gICAqIEBwYXJhbSBtb3VzZXRyYXAgbW91c2V0cmFwIGluc3RhbmNlXG4gICAqIEBwYXJhbSBrZXlNYXAga2V5IG1hcFxuICAgKi9cbiAgcHJpdmF0ZSBfdW5yZWdpc3RlcihrZXk6IHN0cmluZywgbW91c2V0cmFwOiBNb3VzZXRyYXBJbnN0YW5jZSwga2V5TWFwOiBNYXA8c3RyaW5nLCBOZ3hLZXlIYW5kbGVyPikge1xuICAgIG1vdXNldHJhcC51bmJpbmQoa2V5KTtcbiAgICBpZiAoa2V5TWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGtleU1hcC5nZXQoa2V5KTtcbiAgICAgIHZhbHVlLmhhbmRsZXIkLmNvbXBsZXRlKCk7XG4gICAgICBrZXlNYXAuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==