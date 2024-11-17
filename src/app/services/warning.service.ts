import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  private _warningMessage: Subject<string> = new Subject();
  public warningMessage$: Observable<string> = this._warningMessage.asObservable();

  constructor() { }

  public showWarning(message: string): void {
    this._warningMessage.next(message);
  }

}
