import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { GuessBoxComponent } from './guess-box/guess-box.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { AuthInterceptor } from './auth-interceptor.interceptor';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteBoxComponent,
    GuessBoxComponent,
    AnswerBoxComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
