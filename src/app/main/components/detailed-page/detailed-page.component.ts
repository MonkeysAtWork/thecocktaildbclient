import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  templateUrl: './detailed-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedPage {

  constructor(
    private _cocktailService: CocktailService,
    private _route: ActivatedRoute,
    private _navController: NavController,
  ) { }

  readonly cocktail$ = this._route.paramMap.pipe(
    switchMap((params: ParamMap) => this._cocktailService.getCoctailDetails(params.get("id")))
  )

  public goBack(): void {
    this._navController.back();
  }

}
