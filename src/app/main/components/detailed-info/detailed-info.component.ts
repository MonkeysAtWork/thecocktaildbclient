import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CocktailDetailedViewModel } from '../../models/cocktail-detailed.view-model';

@Component({
  selector: 'detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedInfoComponent {

  @Input()
  public model: CocktailDetailedViewModel | undefined | null;

  constructor() { }

}
