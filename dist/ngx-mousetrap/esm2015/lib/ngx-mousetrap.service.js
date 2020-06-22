import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as Mousetrap from 'mousetrap';
import * as i0 from "@angular/core";
let NgxMousetrapService = class NgxMousetrapService {
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
};
NgxMousetrapService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxMousetrapService_Factory() { return new NgxMousetrapService(); }, token: NgxMousetrapService, providedIn: "root" });
NgxMousetrapService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxMousetrapService);
export { NgxMousetrapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vdXNldHJhcC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sV0FBVyxDQUFDOztBQUt2QyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVc5QjtRQVBRLG9CQUFlLEdBQStGLElBQUksT0FBTyxFQUFFLENBQUM7UUFFcEksNENBQTRDO1FBQ3BDLFdBQU0sR0FBK0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUVoRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBbUI7UUFDOUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNS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SUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLFdBQVcsQ0FBQyxHQUFXLEVBQUUsU0FBNEIsRUFBRSxNQUFrQztRQUMvRixTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FFRixDQUFBOztBQTdHWSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG1CQUFtQixDQTZHL0I7U0E3R1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4S2V5SGFuZGxlciwgTmd4S2V5RXZlbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEVNUFRZLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBNb3VzZXRyYXAgZnJvbSAnbW91c2V0cmFwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TW91c2V0cmFwU2VydmljZSB7XG4gIC8vIGN1cnJlbnQgbW91c2V0cmFwIGluc3RhbmNlXG4gIHByaXZhdGUgbW91c2V0cmFwOiBNb3VzZXRyYXBJbnN0YW5jZTtcblxuICBwcml2YXRlIHNjb3BlZE1vdXNlVHJhcDogV2Vha01hcDxIVE1MRWxlbWVudCwgeyBtb3VzZXRyYXA6IE1vdXNldHJhcEluc3RhbmNlLCBrZXlNYXA6IE1hcDxzdHJpbmcsIE5neEtleUhhbmRsZXI+IH0+ID0gbmV3IFdlYWtNYXAoKTtcblxuICAvLyBtYXAgb2Yga2V5Y29tYmluYXRpb24gYW5kIGhvdGtleSBkZXRhaWxzLlxuICBwcml2YXRlIGtleU1hcDogTWFwPHN0cmluZywgTmd4S2V5SGFuZGxlcj4gPSBuZXcgTWFwKCk7XG5cbiAgcHVibGljIHBhdXNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW91c2V0cmFwID0gbmV3IE1vdXNldHJhcCgpO1xuICAgIGNvbnN0IG9yaWduaW5hbENCID0gdGhpcy5tb3VzZXRyYXAuc3RvcENhbGxiYWNrO1xuXG4gICAgdGhpcy5tb3VzZXRyYXAuc3RvcENhbGxiYWNrID0gKGUsIGVsZW1lbnQsIGNvbWJvKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ25pbmFsQ0IuYXBwbHkodGhpcy5tb3VzZXRyYXAsIFtlLCBlbGVtZW50LCBjb21ib10pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBob3Qga2V5IGNvbWJpbmF0aW9ucyBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoaWNoIHdpbGwgYmVcbiAgICogdHJpZ2dyZWQgd2hlbiBob3RrZXkgY29tYmluYXRpb24gaXMgcHJlc3NlZFxuICAgKiBAcGFyYW0ga2V5cyBsaXN0IG9mIGhvdGtleSBjb21iaW5hdGlvbnNcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlcihrZXk6IHN0cmluZywgc2NvcGU/OiBIVE1MRWxlbWVudCk6IE9ic2VydmFibGU8Tmd4S2V5RXZlbnQ+IHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH1cblxuICAgIGxldCBrZXlNYXAgPSB0aGlzLmtleU1hcDtcbiAgICBsZXQgbW91c2V0cmFwSW5zdGFuY2UgPSB0aGlzLm1vdXNldHJhcDtcblxuICAgIGlmIChzY29wZSkge1xuICAgICAgaWYgKCF0aGlzLnNjb3BlZE1vdXNlVHJhcC5oYXMoc2NvcGUpKSB7XG4gICAgICAgIGtleU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgbW91c2V0cmFwSW5zdGFuY2UgPSBuZXcgTW91c2V0cmFwKHNjb3BlKTtcbiAgICAgICAgdGhpcy5zY29wZWRNb3VzZVRyYXAuc2V0KHNjb3BlLCB7IGtleU1hcCwgbW91c2V0cmFwOiBtb3VzZXRyYXBJbnN0YW5jZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdXNldHJhcEluc3RhbmNlID0gdGhpcy5zY29wZWRNb3VzZVRyYXAuZ2V0KHNjb3BlKS5tb3VzZXRyYXA7XG4gICAgICAgIGtleU1hcCA9IHRoaXMuc2NvcGVkTW91c2VUcmFwLmdldChzY29wZSkua2V5TWFwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXlNYXAuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBrZXlNYXAuZ2V0KGtleSkuaGFuZGxlciQuYXNPYnNlcnZhYmxlKCkucGlwZSh0aHJvdHRsZVRpbWUoMzAwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciQ6IFN1YmplY3Q8Tmd4S2V5RXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGNvbnN0IGtleUNvbWJvcyA9IGtleS5zcGxpdCgnfCcpLm1hcChwYXJ0ID0+IHBhcnQudHJpbSgpKTtcbiAgICAvLyBiaW5kIHRoZSBrZXkgdG8gbW91c2V0cmFwXG4gICAgbW91c2V0cmFwSW5zdGFuY2UuYmluZChrZXlDb21ib3MsIChlLCBjb21ibzogc3RyaW5nKSA9PiB7XG4gICAgICBoYW5kbGVyJC5uZXh0KHtcbiAgICAgICAga2V5OiBjb21ibyxcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSB7IGhhbmRsZXIkIH07XG4gICAga2V5TWFwLnNldChrZXksIHZhbHVlKTtcblxuICAgIC8vIHRocm90dGxlIHRoZSBrZXkgcHJlc3MuXG4gICAgcmV0dXJuIGhhbmRsZXIkLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGhyb3R0bGVUaW1lKDMwMCkpO1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiB1bnJlZ2lzdGVyIHRoZSBrZXlzLlxuICAgKiBAcGFyYW0ga2V5cyBsaXN0IG9mIGtleSBjb21ibmF0aW9uc1xuICAgKi9cbiAgcHVibGljIHVucmVnaXN0ZXIoc2NvcGU6IEhUTUxFbGVtZW50ID0gbnVsbCwgLi4ua2V5czogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBsZXQgbW91c2V0cmFwID0gdGhpcy5tb3VzZXRyYXA7XG4gICAgbGV0IGtleU1hcCA9IHRoaXMua2V5TWFwO1xuICAgIGxldCBrZXlzTGlzdCA9IGtleXM7XG5cbiAgICBpZiAoc2NvcGUgJiYgdGhpcy5zY29wZWRNb3VzZVRyYXAuaGFzKHNjb3BlKSkge1xuICAgICAgbW91c2V0cmFwID0gdGhpcy5zY29wZWRNb3VzZVRyYXAuZ2V0KHNjb3BlKS5tb3VzZXRyYXA7XG4gICAgICBrZXlNYXAgPSB0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLmtleU1hcDtcbiAgICAgIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBrZXlzTGlzdCA9IEFycmF5LmZyb20odGhpcy5zY29wZWRNb3VzZVRyYXAuZ2V0KHNjb3BlKS5rZXlNYXAua2V5cygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFrZXlzTGlzdCB8fCBrZXlzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAga2V5c0xpc3QuZm9yRWFjaChrID0+IHRoaXMuX3VucmVnaXN0ZXIoaywgbW91c2V0cmFwLCBrZXlNYXApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1bnJlZ2lzdGVyIHRoZSBnaXZlbiBrZXkgY29tYmluYXRpb24uXG4gICAqIGlmIHRoZSBrZXkgaXMgdGhlIGxhc3Qga2V5IGZvciB0aGUgb2JzZXJ2YWJsZSwgdGhlIGNvbXBsZXRlIHRoZSBvYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ga2V5IGtleSBjb21iaW5hdGlvblxuICAgKiBAcGFyYW0gbW91c2V0cmFwIG1vdXNldHJhcCBpbnN0YW5jZVxuICAgKiBAcGFyYW0ga2V5TWFwIGtleSBtYXBcbiAgICovXG4gIHByaXZhdGUgX3VucmVnaXN0ZXIoa2V5OiBzdHJpbmcsIG1vdXNldHJhcDogTW91c2V0cmFwSW5zdGFuY2UsIGtleU1hcDogTWFwPHN0cmluZywgTmd4S2V5SGFuZGxlcj4pIHtcbiAgICBtb3VzZXRyYXAudW5iaW5kKGtleSk7XG4gICAgaWYgKGtleU1hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBrZXlNYXAuZ2V0KGtleSk7XG4gICAgICB2YWx1ZS5oYW5kbGVyJC5jb21wbGV0ZSgpO1xuICAgICAga2V5TWFwLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=