import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RandomCocktailModalComponent } from './components/random-cocktail-modal/random-cocktail-modal.component';
import { CocktailService } from './services/cocktail.service';

@Component({
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPage {

  public inputText: string = '';

  constructor(
    public cocktailService: CocktailService,
    private _navController: NavController,
    private modalCtrl: ModalController,
  ) { }

  async openModal() {
      const modal = await this.modalCtrl.create({
        component: RandomCocktailModalComponent,
      });
      modal.present();
  }

  public searchCocktails(): void {
    this.cocktailService.searchCoctails(this.inputText);
  }

  public goToCocktailDetails(id: string) {
    this._navController.navigateForward(`/main/details/${id}`);
  }

}
