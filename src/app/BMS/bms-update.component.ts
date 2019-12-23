import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bms-update',
  templateUrl: './bms-update.component.html'
})
export class BmsUpdateComponent implements OnInit {
  quotes: Quote[] = [];
  quote: Quote;
  constructor(private activatedRoute: ActivatedRoute) {
    this.quotes = [
      { quoteNumber: 'R2323932', date: '03-Jan-2020', status: 'Pending Clarification', lob: 'Property', reason: '2 Mandatory Claim Information missing' },
      { quoteNumber: 'R2783633', date: '12-Jan-2020', status: 'Missing Information', lob: 'Auto', reason: 'Missing Conviction Details' },

    ];
  }

  ngOnInit() {
    const quoteNumber = this.activatedRoute.snapshot.params.quoteNumber;
    this.quote = this.quotes.filter((quote: Quote) => {
      return quote.quoteNumber === quoteNumber;
    })[0];
  }
}


class Quote {
  quoteNumber: string;
  status: string;
  lob: string;
  date: string;
  reason: string;
}
