import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  chosenWord: String = "";
  newQuote: Subject<void> = new Subject<void>();
  submittedAnswer: Subject<(string)> = new Subject<(string)>();

  onNewQuoteClick() {
    this.newQuote.next();
  }

  updateSubmittedAnswer(event: String) {
    const typeScriptString = event.toString();
    this.submittedAnswer.next(typeScriptString);
  }

  onChosenWord(event: String) {
    this.chosenWord = event;
  }

}
