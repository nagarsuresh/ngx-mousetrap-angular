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
NgxMousetrapService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxMousetrapService_Factory() { return new NgxMousetrapService(); }, token: NgxMousetrapService, providedIn: "root" });
NgxMousetrapService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxMousetrapService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uYWdhcnMvUGVyc29uYWwvZ2l0aHViL25neC1tb3VzZXRyYXAtYW5ndWxhci9wcm9qZWN0cy9uZ3gtbW91c2V0cmFwL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbW91c2V0cmFwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxLQUFLLFNBQVMsTUFBTSxXQUFXLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxtQkFBbUI7SUFXOUI7UUFQUSxvQkFBZSxHQUErRixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXBJLDRDQUE0QztRQUNwQyxXQUFNLEdBQStCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMs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RUFBRSxDQUFDLENBQUM7YUFDdEU7U0FDRjtRQUNELElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxXQUFXLENBQUMsR0FBVyxFQUFFLFNBQTRCLEVBQUUsTUFBa0M7UUFDL0YsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O1lBOUdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEtleUhhbmRsZXIsIE5neEtleUV2ZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgTW91c2V0cmFwIGZyb20gJ21vdXNldHJhcCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neE1vdXNldHJhcFNlcnZpY2Uge1xuICAvLyBjdXJyZW50IG1vdXNldHJhcCBpbnN0YW5jZVxuICBwcml2YXRlIG1vdXNldHJhcDogTW91c2V0cmFwSW5zdGFuY2U7XG5cbiAgcHJpdmF0ZSBzY29wZWRNb3VzZVRyYXA6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIHsgbW91c2V0cmFwOiBNb3VzZXRyYXBJbnN0YW5jZSwga2V5TWFwOiBNYXA8c3RyaW5nLCBOZ3hLZXlIYW5kbGVyPiB9PiA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgLy8gbWFwIG9mIGtleWNvbWJpbmF0aW9uIGFuZCBob3RrZXkgZGV0YWlscy5cbiAgcHJpdmF0ZSBrZXlNYXA6IE1hcDxzdHJpbmcsIE5neEtleUhhbmRsZXI+ID0gbmV3IE1hcCgpO1xuXG4gIHB1YmxpYyBwYXVzZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vdXNldHJhcCA9IG5ldyBNb3VzZXRyYXAoKTtcbiAgICBjb25zdCBvcmlnbmluYWxDQiA9IHRoaXMubW91c2V0cmFwLnN0b3BDYWxsYmFjaztcblxuICAgIHRoaXMubW91c2V0cmFwLnN0b3BDYWxsYmFjayA9IChlLCBlbGVtZW50LCBjb21ibykgPT4ge1xuICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWduaW5hbENCLmFwcGx5KHRoaXMubW91c2V0cmFwLCBbZSwgZWxlbWVudCwgY29tYm9dKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgaG90IGtleSBjb21iaW5hdGlvbnMgYW5kIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aGljaCB3aWxsIGJlXG4gICAqIHRyaWdncmVkIHdoZW4gaG90a2V5IGNvbWJpbmF0aW9uIGlzIHByZXNzZWRcbiAgICogQHBhcmFtIGtleXMgbGlzdCBvZiBob3RrZXkgY29tYmluYXRpb25zXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIoa2V5OiBzdHJpbmcsIHNjb3BlPzogSFRNTEVsZW1lbnQpOiBPYnNlcnZhYmxlPE5neEtleUV2ZW50PiB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG5cbiAgICBsZXQga2V5TWFwID0gdGhpcy5rZXlNYXA7XG4gICAgbGV0IG1vdXNldHJhcEluc3RhbmNlID0gdGhpcy5tb3VzZXRyYXA7XG5cbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgIGlmICghdGhpcy5zY29wZWRNb3VzZVRyYXAuaGFzKHNjb3BlKSkge1xuICAgICAgICBrZXlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIG1vdXNldHJhcEluc3RhbmNlID0gbmV3IE1vdXNldHJhcChzY29wZSk7XG4gICAgICAgIHRoaXMuc2NvcGVkTW91c2VUcmFwLnNldChzY29wZSwgeyBrZXlNYXAsIG1vdXNldHJhcDogbW91c2V0cmFwSW5zdGFuY2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3VzZXRyYXBJbnN0YW5jZSA9IHRoaXMuc2NvcGVkTW91c2VUcmFwLmdldChzY29wZSkubW91c2V0cmFwO1xuICAgICAgICBrZXlNYXAgPSB0aGlzLnNjb3BlZE1vdXNlVHJhcC5nZXQoc2NvcGUpLmtleU1hcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4ga2V5TWFwLmdldChrZXkpLmhhbmRsZXIkLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGhyb3R0bGVUaW1lKDMwMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIkOiBTdWJqZWN0PE5neEtleUV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdCBrZXlDb21ib3MgPSBrZXkuc3BsaXQoJ3wnKS5tYXAocGFydCA9PiBwYXJ0LnRyaW0oKSk7XG4gICAgLy8gYmluZCB0aGUga2V5IHRvIG1vdXNldHJhcFxuICAgIG1vdXNldHJhcEluc3RhbmNlLmJpbmQoa2V5Q29tYm9zLCAoZSwgY29tYm86IHN0cmluZykgPT4ge1xuICAgICAgaGFuZGxlciQubmV4dCh7XG4gICAgICAgIGtleTogY29tYm8sXG4gICAgICAgIGV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHZhbHVlID0geyBoYW5kbGVyJCB9O1xuICAgIGtleU1hcC5zZXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAvLyB0aHJvdHRsZSB0aGUga2V5IHByZXNzLlxuICAgIHJldHVybiBoYW5kbGVyJC5hc09ic2VydmFibGUoKS5waXBlKHRocm90dGxlVGltZSgzMDApKTtcblxuICB9XG5cblxuICAvKipcbiAgICogdW5yZWdpc3RlciB0aGUga2V5cy5cbiAgICogQHBhcmFtIGtleXMgbGlzdCBvZiBrZXkgY29tYm5hdGlvbnNcbiAgICovXG4gIHB1YmxpYyB1bnJlZ2lzdGVyKHNjb3BlOiBIVE1MRWxlbWVudCA9IG51bGwsIC4uLmtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgbGV0IG1vdXNldHJhcCA9IHRoaXMubW91c2V0cmFwO1xuICAgIGxldCBrZXlNYXAgPSB0aGlzLmtleU1hcDtcbiAgICBsZXQga2V5c0xpc3QgPSBrZXlzO1xuXG4gICAgaWYgKHNjb3BlICYmIHRoaXMuc2NvcGVkTW91c2VUcmFwLmhhcyhzY29wZSkpIHtcbiAgICAgIG1vdXNldHJhcCA9IHRoaXMuc2NvcGVkTW91c2VUcmFwLmdldChzY29wZSkubW91c2V0cmFwO1xuICAgICAga2V5TWFwID0gdGhpcy5zY29wZWRNb3VzZVRyYXAuZ2V0KHNjb3BlKS5rZXlNYXA7XG4gICAgICBpZiAoIWtleXMgfHwga2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAga2V5c0xpc3QgPSBBcnJheS5mcm9tKHRoaXMuc2NvcGVkTW91c2VUcmFwLmdldChzY29wZSkua2V5TWFwLmtleXMoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgha2V5c0xpc3QgfHwga2V5c0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGtleXNMaXN0LmZvckVhY2goayA9PiB0aGlzLl91bnJlZ2lzdGVyKGssIG1vdXNldHJhcCwga2V5TWFwKSk7XG4gIH1cblxuICAvKipcbiAgICogdW5yZWdpc3RlciB0aGUgZ2l2ZW4ga2V5IGNvbWJpbmF0aW9uLlxuICAgKiBpZiB0aGUga2V5IGlzIHRoZSBsYXN0IGtleSBmb3IgdGhlIG9ic2VydmFibGUsIHRoZSBjb21wbGV0ZSB0aGUgb2JzZXJ2YWJsZS5cbiAgICogQHBhcmFtIGtleSBrZXkgY29tYmluYXRpb25cbiAgICogQHBhcmFtIG1vdXNldHJhcCBtb3VzZXRyYXAgaW5zdGFuY2VcbiAgICogQHBhcmFtIGtleU1hcCBrZXkgbWFwXG4gICAqL1xuICBwcml2YXRlIF91bnJlZ2lzdGVyKGtleTogc3RyaW5nLCBtb3VzZXRyYXA6IE1vdXNldHJhcEluc3RhbmNlLCBrZXlNYXA6IE1hcDxzdHJpbmcsIE5neEtleUhhbmRsZXI+KSB7XG4gICAgbW91c2V0cmFwLnVuYmluZChrZXkpO1xuICAgIGlmIChrZXlNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0ga2V5TWFwLmdldChrZXkpO1xuICAgICAgdmFsdWUuaGFuZGxlciQuY29tcGxldGUoKTtcbiAgICAgIGtleU1hcC5kZWxldGUoa2V5KTtcbiAgICB9XG4gIH1cblxufVxuIl19