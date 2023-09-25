import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-guess-box',
  templateUrl: './guess-box.component.html',
  styleUrls: ['./guess-box.component.css']
})
export class GuessBoxComponent {
  @Input() clear: Subject<void>|undefined;
  @Output('onSubmittedAnswer') passToParent: EventEmitter<String> = new EventEmitter<String>();

  guessTextBoxValue: String = "";

  constructor() { }

  ngOnInit() {
    if(this.clear) {
      this.clear.subscribe(() => {this.guessTextBoxValue = ""});
    }
  }

  submitAnswer() {
    this.passToParent.emit(this.guessTextBoxValue);
  }

}
