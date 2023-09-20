import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { GuessBoxComponent } from './guess-box/guess-box.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteBoxComponent,
    GuessBoxComponent,
    AnswerBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
