import { Injectable } from '@angular/core';
import { NgxKeyHandler, NgxKeyEvent } from './utils';
import { Observable, EMPTY, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import Mousetrap from 'mousetrap';

@Injectable({
  providedIn: 'root'
})
export class NgxMousetrapService {
  // current mousetrap instance
  private mousetrap: Mousetrap.MousetrapInstance;

  private scopedMouseTrap: WeakMap<HTMLElement, {
    mousetrap: Mousetrap.MousetrapInstance,
    keyMap: Map<string, NgxKeyHandler>
  }> = new WeakMap();

  // map of keycombination and hotkey details.
  private keyMap: Map<string, NgxKeyHandler> = new Map();

  public paused = false;

  constructor() {
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
  public register(key: string, scope?: HTMLElement): Observable<NgxKeyEvent> {
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
      } else {
        mousetrapInstance = this.scopedMouseTrap.get(scope).mousetrap;
        keyMap = this.scopedMouseTrap.get(scope).keyMap;
      }
    }

    if (keyMap.has(key)) {
      return keyMap.get(key).handler$.asObservable().pipe(throttleTime(300));
    }

    const handler$: Subject<NgxKeyEvent> = new Subject();

    const keyCombos = key.split('|').map(part => part.trim());
    // bind the key to mousetrap
    mousetrapInstance.bind(keyCombos, (e, combo: string) => {
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
  public unregister(scope: HTMLElement = null, ...keys: string[]): void {
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
  private _unregister(key: string, mousetrap: Mousetrap.MousetrapInstance, keyMap: Map<string, NgxKeyHandler>) {
    mousetrap.unbind(key);
    if (keyMap.has(key)) {
      const value = keyMap.get(key);
      value.handler$.complete();
      keyMap.delete(key);
    }
  }

}
