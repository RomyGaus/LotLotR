import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-guess-box',
  templateUrl: './guess-box.component.html',
  styleUrls: ['./guess-box.component.css']
})
export class GuessBoxComponent {
  @Output('onSubmittedAnswer') passToParent: EventEmitter<String> = new EventEmitter<String>();

  guessTextBoxValue: String = "";

  constructor() { }

  ngOnInit() {
    
  }

  submitAnswer() {
    this.passToParent.emit(this.guessTextBoxValue);
  }

}
