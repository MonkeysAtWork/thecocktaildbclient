import { Coctail } from "src/app/main/services/cocktail-request.service";

export class CocktailViewModel {

  static prepare(data: Coctail[]) {
    return data.map((cocktail) => new CocktailViewModel(cocktail));
  }

  public id: string;
  public title: string;
  public imgUrl: string;
  public glassType: string;

  constructor(data: Coctail) {
    this.id = data.idDrink;
    this.title = data.strDrink;
    this.imgUrl = data.strDrinkThumb;
    this.glassType = data.strGlass;
  }
}