import { Component } from "@angular/core";
import { Quote } from '../model/quote.model';

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
      { quoteNumber: 'R2323765', date: '03-Dec-2019', status: 'Pending Clarification', lob: 'Property', reason: 'Year built deatils not updated' },
      { quoteNumber: 'R2726489', date: '18-Mar-2020', status: 'UW Approval Required', lob: 'Auto', reason: 'Exceeded UW threshold' },

    ];
  }
}
