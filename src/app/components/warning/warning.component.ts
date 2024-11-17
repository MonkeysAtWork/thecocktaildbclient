import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WarningService } from 'src/app/services/warning.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningComponent implements OnDestroy {

  showToast: boolean = false;
  message: string = '';

  private _unsubscriber: Subject<void> = new Subject();

  constructor(
    warningService: WarningService,
    private _cdr: ChangeDetectorRef,
  ) {
    warningService.warningMessage$
      .pipe(takeUntil(this._unsubscriber))
      .subscribe((message) => {
        this.message = message;
        this.setOpen(true);
      })
  }
  public ngOnDestroy(): void {
    this._unsubscriber.next()
    this._unsubscriber.complete()
  }

  public setOpen(isOpen: boolean) {
    this.showToast = isOpen;
    this._cdr.markForCheck();
  }

}
