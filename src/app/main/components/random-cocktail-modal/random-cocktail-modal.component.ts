import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'random-cocktail-modal',
  templateUrl: './random-cocktail-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomCocktailModalComponent {

  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  constructor(
    private _cocktailService: CocktailService,
    private _modalCtrl: ModalController
  ) { }

  cancel() {
    return this._modalCtrl.dismiss();
  }

  readonly cocktail$ = this._cocktailService.getRandomCocktail();

}
