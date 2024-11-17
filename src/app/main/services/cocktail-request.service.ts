import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { catchError, map, NEVER, Observable, of } from 'rxjs';
import { WarningService } from 'src/app/services/warning.service';

export type Coctail = {
  idDrink: string,
  strDrink: string,
  strGlass: string,
  strDrinkThumb: string,
  strInstructions: string,
  strIngredient1?: string,
  strIngredient2?: string,
  strIngredient3?: string,
  strIngredient4?: string,
  strIngredient5?: string,
  strIngredient6?: string,
  strIngredient7?: string,
  strIngredient8?: string,
  strIngredient9?: string,
  strIngredient10?: string,
  strIngredient11?: string,
  strIngredient12?: string,
  strIngredient13?: string,
  strIngredient14?: string,
  strIngredient15?: string,
}

type CoctailApiResponse = {
  drinks: Coctail[] | string | null
}

@Injectable({
  providedIn: 'root'
})
export class CocktailRequestService {
  private _baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(
    private _http: HttpClient,
    private _warningService: WarningService,
  ) { }

  public getCoctailById(id: string): Observable<Coctail | null> {
    const endpoint = 'lookup.php';

    const searchParamName = 'i';
    const params = { [searchParamName]: id };

    return this.makeCoctailsRequest(endpoint, params)
      .pipe(
        map((response) => response?.[0] || null),
        catchError(() => of(null))
      );
  }

  public searchCocktails(query: string): Observable<Coctail[]> {
    const endpoint = 'search.php';

    const searchParamName = 's';
    const params = { [searchParamName]: query };

    return this.makeCoctailsRequest(endpoint, params);
  }

  public getRandomCocktail(): Observable<Coctail | null> {
    const endpoint = 'random.php';

    return this.makeCoctailsRequest(endpoint)
      .pipe(
        map((response) => response?.[0] || null),
        catchError(() => of(null))
      );
  }

  private makeCoctailsRequest(endpoint: string, params?: any): Observable<Coctail[]> {
    return this.makeGetRequest<CoctailApiResponse>(endpoint, params)
      .pipe(map((response: CoctailApiResponse) => {
        if (!response?.drinks || !Array.isArray(response.drinks))
          throw new Error('Nothing found');

        return response.drinks
      }));
  }

  private makeGetRequest<T>(endpoint: string, params?: any): Observable<T> {
    const url = this.makeUrl(endpoint);

    return this._http.get<T>(url.toString(), { params })
      .pipe(catchError(this.handleError.bind(this)))
  }

  private handleError(error: any) {
    this._warningService.showWarning('Data loading error');
    return NEVER;
  }

  private makeUrl(endpoint: string): URL {
    return new URL(endpoint, this._baseUrl);
  }
}
