import { Injectable } from '@angular/core';
import { Observable, Subject, distinctUntilChanged, switchMap, map, of, catchError, iif, startWith } from 'rxjs';
import { CocktailRequestService } from 'src/app/main/services/cocktail-request.service';
import { CocktailDetailedViewModel } from '../models/cocktail-detailed.view-model';
import { CocktailViewModel } from '../models/cocktail.view-model';

export interface Response<T> {
  loading: boolean
  error?: string;
  data?: T;
}

@Injectable()
export class CocktailService {

  public cocktails$: Observable<Response<CocktailViewModel[]> | null>;

  private _searchText$ = new Subject<string>();

  constructor(private _requestService: CocktailRequestService) {

    this.cocktails$ = this._searchText$.pipe(
      distinctUntilChanged(),
      switchMap((searchText) => (
        iif(() => !searchText,
          of(null),
          this._requestService.searchCocktails(searchText).pipe(
            map((cocktails) => ({ data: CocktailViewModel.prepare(cocktails), loading: false })),
            catchError((error: Error) => of({ error: error.message, loading: false })),
            startWith(({ loading: true }))
          )
        ))
      )
    );

  }

  public searchCoctails(searchText: string): void {
      this._searchText$.next(searchText.trim());
  }

  public getRandomCocktail(): Observable<CocktailDetailedViewModel | null> {
    return this._requestService.getRandomCocktail().pipe(
      map((cocktail) => {
        if (!cocktail)
          return null;

        return new CocktailDetailedViewModel(cocktail);
      })
    )
  }

  public getCoctailDetails(id: string | null): Observable<CocktailDetailedViewModel | null> {
    if (!id)
      return of(null);

    return this._requestService.getCoctailById(id)
      .pipe(
        map((cocktail) => {
          if (!cocktail)
            return null;

          return new CocktailDetailedViewModel(cocktail)
        })
      );
  }

}
