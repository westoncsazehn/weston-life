import { Component } from "@angular/core";

import { PreloaderService } from "./services";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public isSignedIn: boolean = false;
  public isActive: boolean = false;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private preloaderService: PreloaderService) {
    this.setPreloaderObservable();
  }

  public ngOnInit(): void {
    this.preloaderService.setPrealoder(true);
    this.preloaderService.setPrealoder(false);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setPreloaderObservable(): void {
    this.preloaderService.isActive$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isActive: boolean) => (this.isActive = isActive));
  }
}
