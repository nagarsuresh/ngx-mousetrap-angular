import { NgxKeyEvent } from './utils';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NgxMousetrapService {
    private mousetrap;
    private scopedMouseTrap;
    private keyMap;
    paused: boolean;
    constructor();
    /**
     * Registers the hot key combinations and returns an observable which will be
     * triggred when hotkey combination is pressed
     * @param keys list of hotkey combinations
     */
    register(key: string, scope?: HTMLElement): Observable<NgxKeyEvent>;
    /**
     * unregister the keys.
     * @param keys list of key combnations
     */
    unregister(scope?: HTMLElement, ...keys: string[]): void;
    /**
     * unregister the given key combination.
     * if the key is the last key for the observable, the complete the observable.
     * @param key key combination
     * @param mousetrap mousetrap instance
     * @param keyMap key map
     */
    private _unregister;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxMousetrapService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1vdXNldHJhcC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm5neC1tb3VzZXRyYXAuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hLZXlFdmVudCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmd4TW91c2V0cmFwU2VydmljZSB7XG4gICAgcHJpdmF0ZSBtb3VzZXRyYXA7XG4gICAgcHJpdmF0ZSBzY29wZWRNb3VzZVRyYXA7XG4gICAgcHJpdmF0ZSBrZXlNYXA7XG4gICAgcGF1c2VkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIHRoZSBob3Qga2V5IGNvbWJpbmF0aW9ucyBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoaWNoIHdpbGwgYmVcbiAgICAgKiB0cmlnZ3JlZCB3aGVuIGhvdGtleSBjb21iaW5hdGlvbiBpcyBwcmVzc2VkXG4gICAgICogQHBhcmFtIGtleXMgbGlzdCBvZiBob3RrZXkgY29tYmluYXRpb25zXG4gICAgICovXG4gICAgcmVnaXN0ZXIoa2V5OiBzdHJpbmcsIHNjb3BlPzogSFRNTEVsZW1lbnQpOiBPYnNlcnZhYmxlPE5neEtleUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiB1bnJlZ2lzdGVyIHRoZSBrZXlzLlxuICAgICAqIEBwYXJhbSBrZXlzIGxpc3Qgb2Yga2V5IGNvbWJuYXRpb25zXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihzY29wZT86IEhUTUxFbGVtZW50LCAuLi5rZXlzOiBzdHJpbmdbXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdW5yZWdpc3RlciB0aGUgZ2l2ZW4ga2V5IGNvbWJpbmF0aW9uLlxuICAgICAqIGlmIHRoZSBrZXkgaXMgdGhlIGxhc3Qga2V5IGZvciB0aGUgb2JzZXJ2YWJsZSwgdGhlIGNvbXBsZXRlIHRoZSBvYnNlcnZhYmxlLlxuICAgICAqIEBwYXJhbSBrZXkga2V5IGNvbWJpbmF0aW9uXG4gICAgICogQHBhcmFtIG1vdXNldHJhcCBtb3VzZXRyYXAgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ga2V5TWFwIGtleSBtYXBcbiAgICAgKi9cbiAgICBwcml2YXRlIF91bnJlZ2lzdGVyO1xufVxuIl19