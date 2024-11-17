import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CocktailViewModel } from '../../models/cocktail.view-model';

@Component({
  selector: 'cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailCardComponent {

  @Input()
  public model: CocktailViewModel | undefined | null;

  constructor() { }

}
