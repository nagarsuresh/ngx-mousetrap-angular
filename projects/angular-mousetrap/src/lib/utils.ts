import { Subject } from 'rxjs';

export interface NgxKeyHandler {
  handler$: Subject<any>;
}


export interface NgxKeyEvent {
  event: Event;
  key: string;
}

