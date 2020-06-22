import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as Mousetrap from 'mousetrap';
import * as i0 from "@angular/core";
export class NgxMousetrapService {
    constructor() {
        this.scopedMouseTrap = new WeakMap();
        // map of keycombination and hotkey details.
        this.keyMap = new Map();
        this.paused = false;
        this.mousetrap = new Mousetrap();
        const origninalCB = this.mousetrap.stopCallback;
        this.mousetrap.stopCallback = (e, element, combo) => {
            if (this.paused) {
                return true;
            }
            return origninalCB.apply(this.mousetrap, [e, element, combo]);
        };
    }
    /**
     * Registers the hot key combinations and returns an observable which will be
     * triggred when hotkey combination is pressed
     * @param keys list of hotkey combinations
     */
    register(key, scope) {
        if (!key) {
            return EMPTY;
        }
        let keyMap = this.keyMap;
        let mousetrapInstance = this.mousetrap;
        if (scope) {
            if (!this.scopedMouseTrap.has(scope)) {
                keyMap = new Map();
                mousetrapInstance = new Mousetrap(scope);
                this.scopedMouseTrap.set(scope, { keyMap, mousetrap: mousetrapInstance });
            }
            else {
                mousetrapInstance = this.scopedMouseTrap.get(scope).mousetrap;
                keyMap = this.scopedMouseTrap.get(scope).keyMap;
            }
        }
        if (keyMap.has(key)) {
            return keyMap.get(key).handler$.asObservable().pipe(throttleTime(300));
        }
        const handler$ = new Subject();
        const keyCombos = key.split('|').map(part => part.trim());
        // bind the key to mousetrap
        mousetrapInstance.bind(keyCombos, (e, combo) => {
            handler$.next({
                key: combo,
                event: e
            });
        });
        const value = { handler$ };
        keyMap.set(key, value);
        // throttle the key press.
        return handler$.asObservable().pipe(throttleTime(300));
    }
    /**
     * unregister the keys.
     * @param keys list of key combnations
     */
    unregister(scope = null, ...keys) {
        let mousetrap = this.mousetrap;
        let keyMap = this.keyMap;
        let keysList = keys;
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
        keysList.forEach(k => this._unregister(k, mousetrap, keyMap));
    }
    /**
     * unregister the given key combination.
     * if the key is the last key for the observable, the complete the observable.
     * @param key key combination
     * @param mousetrap mousetrap instance
     * @param keyMap key map
     */
    _unregister(key, mousetrap, keyMap) {
        mousetrap.unbind(key);
        if (keyMap.has(key)) {
            const value = keyMap.get(key);
            value.handler$.complete();
            keyMap.delete(key);
        }
    }
}
NgxMousetrapService.ɵfac = function NgxMousetrapService_Factory(t) { return new (t || NgxMousetrapService)(); };
NgxMousetrapService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxMousetrapService, factory: NgxMousetrapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxMousetrapService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vdXNldHJhcC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxLQUFLLFNBQVMsTUFBTSxXQUFXLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxtQkFBbUI7SUFXOUI7UUFQUSxvQkFBZSxHQUErRixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXBJLDRDQUE0QztRQUNwQyxXQUFNLEdBQStCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQW1CO1FBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FB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LE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxXQUFXLENBQUMsR0FBVyxFQUFFLFNBQTRCLEVBQUUsTUFBa0M7UUFDL0YsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOztzRkEzR1UsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO2tEQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hLZXlIYW5kbGVyLCBOZ3hLZXlFdmVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIE1vdXNldHJhcCBmcm9tICdtb3VzZXRyYXAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNb3VzZXRyYXBTZXJ2aWNlIHtcbiAgLy8gY3VycmVudCBtb3VzZXRyYXAgaW5zdGFuY2VcbiAgcHJpdmF0ZSBtb3VzZXRyYXA6IE1vdXNldHJhcEluc3RhbmNlO1xuXG4gIHByaXZhdGUgc2NvcGVkTW91c2VUcmFwOiBXZWFrTWFwPEhUTUxFbGVtZW50LCB7IG1vdXNldHJhcDogTW91c2V0cmFwSW5zdGFuY2UsIGtleU1hcDogTWFwPHN0cmluZywgTmd4S2V5SGFuZGxlcj4gfT4gPSBuZXcgV2Vha01hcCgpO1xuXG4gIC8vIG1hcCBvZiBrZXljb21iaW5hdGlvbiBhbmQgaG90a2V5IGRldGFpbHMuXG4gIHByaXZhdGUga2V5TWFwOiBNYXA8c3RyaW5nLCBOZ3hLZXlIYW5kbGVyPiA9IG5ldyBNYXAoKTtcblxuICBwdWJsaWMgcGF1c2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb3VzZXRyYXAgPSBuZXcgTW91c2V0cmFwKCk7XG4gICAgY29uc3Qgb3JpZ25pbmFsQ0IgPSB0aGlzLm1vdXNldHJhcC5zdG9wQ2FsbGJhY2s7XG5cbiAgICB0aGlzLm1vdXNldHJhcC5zdG9wQ2FsbGJhY2sgPSAoZSwgZWxlbWVudCwgY29tYm8pID0+IHtcbiAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnbmluYWxDQi5hcHBseSh0aGlzLm1vdXNldHJhcCwgW2UsIGVsZW1lbnQsIGNvbWJvXSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGhvdCBrZXkgY29tYmluYXRpb25zIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgd2hpY2ggd2lsbCBiZVxuICAgKiB0cmlnZ3JlZCB3aGVuIGhvdGtleSBjb21iaW5hdGlvbiBpcyBwcmVzc2VkXG4gICAqIEBwYXJhbSBrZXlzIGxpc3Qgb2YgaG90a2V5IGNvbWJpbmF0aW9uc1xuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyKGtleTogc3RyaW5nLCBzY29wZT86IEhUTUxFbGVtZW50KTogT2JzZXJ2YWJsZTxOZ3hLZXlFdmVudD4ge1xuICAgIGlmICgha2V5KSB7XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfVxuXG4gICAgbGV0IGtleU1hcCA9IHRoaXMua2V5TWFwO1xuICAgIGxldCBtb3VzZXRyYXBJbnN0YW5jZSA9IHRoaXMubW91c2V0cmFwO1xuXG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICBpZiAoIXRoaXMuc2NvcGVkTW91c2VUcmFwLmhhcyhzY29wZSkpIHtcbiAgICAgICAga2V5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBtb3VzZXRyYXBJbnN0YW5jZSA9IG5ldyBNb3VzZXRyYXAoc2NvcGUpO1xuICAgICAgICB0aGlzLnNjb3BlZE1vdXNlVHJhcC5zZXQoc2NvcGUsIHsga2V5TWFwLCBtb3VzZXRyYXA6IG1vdXNldHJhcEluc3RhbmNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW91c2V0cmFwSW5zdGFuY2UgPSB0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLm1vdXNldHJhcDtcbiAgICAgICAga2V5TWFwID0gdGhpcy5zY29wZWRNb3VzZVRyYXAuZ2V0KHNjb3BlKS5rZXlNYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleU1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGtleU1hcC5nZXQoa2V5KS5oYW5kbGVyJC5hc09ic2VydmFibGUoKS5waXBlKHRocm90dGxlVGltZSgzMDApKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyJDogU3ViamVjdDxOZ3hLZXlFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3Qga2V5Q29tYm9zID0ga2V5LnNwbGl0KCd8JykubWFwKHBhcnQgPT4gcGFydC50cmltKCkpO1xuICAgIC8vIGJpbmQgdGhlIGtleSB0byBtb3VzZXRyYXBcbiAgICBtb3VzZXRyYXBJbnN0YW5jZS5iaW5kKGtleUNvbWJvcywgKGUsIGNvbWJvOiBzdHJpbmcpID0+IHtcbiAgICAgIGhhbmRsZXIkLm5leHQoe1xuICAgICAgICBrZXk6IGNvbWJvLFxuICAgICAgICBldmVudDogZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHsgaGFuZGxlciQgfTtcbiAgICBrZXlNYXAuc2V0KGtleSwgdmFsdWUpO1xuXG4gICAgLy8gdGhyb3R0bGUgdGhlIGtleSBwcmVzcy5cbiAgICByZXR1cm4gaGFuZGxlciQuYXNPYnNlcnZhYmxlKCkucGlwZSh0aHJvdHRsZVRpbWUoMzAwKSk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIHVucmVnaXN0ZXIgdGhlIGtleXMuXG4gICAqIEBwYXJhbSBrZXlzIGxpc3Qgb2Yga2V5IGNvbWJuYXRpb25zXG4gICAqL1xuICBwdWJsaWMgdW5yZWdpc3RlcihzY29wZTogSFRNTEVsZW1lbnQgPSBudWxsLCAuLi5rZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGxldCBtb3VzZXRyYXAgPSB0aGlzLm1vdXNldHJhcDtcbiAgICBsZXQga2V5TWFwID0gdGhpcy5rZXlNYXA7XG4gICAgbGV0IGtleXNMaXN0ID0ga2V5cztcblxuICAgIGlmIChzY29wZSAmJiB0aGlzLnNjb3BlZE1vdXNlVHJhcC5oYXMoc2NvcGUpKSB7XG4gICAgICBtb3VzZXRyYXAgPSB0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLm1vdXNldHJhcDtcbiAgICAgIGtleU1hcCA9IHRoaXMuc2NvcGVkTW91c2VUcmFwLmdldChzY29wZSkua2V5TWFwO1xuICAgICAgaWYgKCFrZXlzIHx8IGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGtleXNMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLmtleU1hcC5rZXlzKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWtleXNMaXN0IHx8IGtleXNMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBrZXlzTGlzdC5mb3JFYWNoKGsgPT4gdGhpcy5fdW5yZWdpc3RlcihrLCBtb3VzZXRyYXAsIGtleU1hcCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVucmVnaXN0ZXIgdGhlIGdpdmVuIGtleSBjb21iaW5hdGlvbi5cbiAgICogaWYgdGhlIGtleSBpcyB0aGUgbGFzdCBrZXkgZm9yIHRoZSBvYnNlcnZhYmxlLCB0aGUgY29tcGxldGUgdGhlIG9ic2VydmFibGUuXG4gICAqIEBwYXJhbSBrZXkga2V5IGNvbWJpbmF0aW9uXG4gICAqIEBwYXJhbSBtb3VzZXRyYXAgbW91c2V0cmFwIGluc3RhbmNlXG4gICAqIEBwYXJhbSBrZXlNYXAga2V5IG1hcFxuICAgKi9cbiAgcHJpdmF0ZSBfdW5yZWdpc3RlcihrZXk6IHN0cmluZywgbW91c2V0cmFwOiBNb3VzZXRyYXBJbnN0YW5jZSwga2V5TWFwOiBNYXA8c3RyaW5nLCBOZ3hLZXlIYW5kbGVyPikge1xuICAgIG1vdXNldHJhcC51bmJpbmQoa2V5KTtcbiAgICBpZiAoa2V5TWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGtleU1hcC5nZXQoa2V5KTtcbiAgICAgIHZhbHVlLmhhbmRsZXIkLmNvbXBsZXRlKCk7XG4gICAgICBrZXlNYXAuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==