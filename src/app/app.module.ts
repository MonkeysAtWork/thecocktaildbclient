import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { WarningComponent } from './components/warning/warning.component';
import { WarningService } from './services/warning.service';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
  ],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideHttpClient(),
    WarningService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
