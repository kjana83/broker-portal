import { Component } from "@angular/core";

@Component({
  selector: 'bms-error',
  templateUrl: './bms-error-list.component.html'
})
export class BmsErrorListComponent {
  quotes: Quote[] = [];
  constructor() {
    this.quotes = [
      { quoteNumber: 'R2323932', date: '03-Jan-2020', status: 'Pending Clarification', lob: 'Property', reason: '2 Mandatory Claim Information missing' },
      { quoteNumber: 'R2783633', date: '12-Jan-2020', status: 'Missing Information', lob: 'Auto', reason: 'Missing Conviction Details' },

    ];
  }
}

class Quote {
  quoteNumber: string;
  status: string;
  lob: string;
  date: string;
  reason: string;
}
