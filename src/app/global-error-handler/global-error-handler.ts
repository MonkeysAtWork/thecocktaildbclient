import { ErrorHandler, Injectable } from "@angular/core";
import { WarningService } from "../services/warning.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private _warningService: WarningService) {
  }

  handleError(error: any) {
    this._warningService.showWarning('Some thing wrong');
  }
}