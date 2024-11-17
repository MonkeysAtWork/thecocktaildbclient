import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MainPageRoutingModule } from './main-routing.module';
import { CocktailService } from './services/cocktail.service';
import { DetailedPage } from './components/detailed-page/detailed-page.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { RandomCocktailModalComponent } from './components/random-cocktail-modal/random-cocktail-modal.component';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { MainPage } from './main.page';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [
    MainPage,
    DetailedPage,
    DetailedInfoComponent,
    RandomCocktailModalComponent,
    CocktailCardComponent,
    LoaderComponent
  ],
  providers: [
    CocktailService
  ]
})
export class MainPageModule { }
