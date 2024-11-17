import { Coctail } from "src/app/main/services/cocktail-request.service";

export class CocktailDetailedViewModel {
  public title: string;
  public imgUrl: string;
  public glassType: string;
  public instruction: string;
  public ingredients: string[];

  constructor(data: Coctail) {
    this.title = data.strDrink;
    this.imgUrl = data.strDrinkThumb;
    this.glassType = data.strGlass;
    this.instruction = data.strInstructions;
    this.ingredients = this.makeIngredients(data);
  }

  private makeIngredients(data: Coctail) {
    return Object.entries(data)
      .filter(([key, value]) => key.startsWith('strIngredient') && Boolean(value))
      .map(([_, value]) => value);
  }
}