import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  @Input() newQuote: Subject<void>|undefined;
  @Input() submittedAnswer: Subject<string>|undefined;
  @Output('onChosenWord') passToParent: EventEmitter<String> = new EventEmitter<String>();

  quote: any;
  chosenWord: string = "";
  console = console;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.getQuote();
    if(this.newQuote) {
      this.newQuote.subscribe(() => this.getQuote());
    }
    if(this.submittedAnswer) {
      this.submittedAnswer.subscribe((answer) => this.checkAnswer(answer));
    }
  }

  getQuote() {
    this.dataService.getData().subscribe((response) => {
      const jsonString = JSON.parse(JSON.stringify(response));
      const dialog = this.parseQuote(jsonString);
      this.chosenWord = this.pickRandomWord(dialog);
      this.quote = this.createBlank(this.chosenWord, dialog);
    });
  }

  parseQuote(json: any): string {
    const quotes = json.docs
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObject = quotes[randomIndex];
    const dialog = quoteObject.dialog;
    const numberOfWords = dialog.split(' ').length;
    if (numberOfWords >= 3) {
      return dialog;
    } else {
      return this.parseQuote(json);
    }  
  }

  pickRandomWord(inputString: string): string {
    const words = inputString.split(" ");
    const filteredWords = words.filter((word) => word.length >= 5)
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
  }

  createBlank(inputWord: string, dialog: string): string {
    const removedWordLength = inputWord.length;
    const underscores = "_".repeat(removedWordLength);
    return dialog.replace(inputWord, underscores);
  }

  checkAnswer(submittedAnswer: string) {
    if(this.chosenWord === submittedAnswer) {
      this.console.log("correct")
    } else {
      this.console.log("wrong")
    }
  }
}
