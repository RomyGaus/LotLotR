import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  newQuote: Subject<void> = new Subject<void>();

  onNewQuoteClick() {
    this.newQuote.next();
  }

}
