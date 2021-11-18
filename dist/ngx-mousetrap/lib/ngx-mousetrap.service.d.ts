import { NgxKeyEvent } from './utils';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxMousetrapService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxMousetrapService>;
}
//# sourceMappingURL=ngx-mousetrap.service.d.ts.map