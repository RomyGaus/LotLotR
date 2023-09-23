import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  quote: any; // Hier werden die API-Daten gespeichert
  console = console

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      const jsonString = JSON.parse(JSON.stringify(response));
      this.quote = this.parseQuote(jsonString)
    });
  }

  parseQuote(json: any): string {
    const quotes = json.docs
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObject = quotes[randomIndex];
    return quoteObject.dialog;
  }
  
}
