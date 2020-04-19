import { Injectable } from "@angular/core";

import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PreloaderService {
  private _isActive: Subject<boolean> = new Subject<boolean>();

  public setPrealoder(isActive: boolean = false): void {
    this._isActive.next(isActive);
  }

  public get isActive$(): Observable<boolean> {
    return this._isActive.asObservable();
  }
}
