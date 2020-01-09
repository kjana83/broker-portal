import { Component } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  results: any[]
  constructor() {
    this.results = [
      {
        clientNumber: '1021374',
        clientName: 'Jacob Antony',
        policies: [
          {
            policyNumber: 'W1012326',
          }, {
            policyNumber: 'W1016328',
          }
        ],
        address: '2206 Eglinton Ave East, Toronto, ON, M2RV6'
      },

      {
        clientNumber: '1025972',
        clientName: 'Mark Williams',
        policies: [
          {
            policyNumber: 'W1013963',
          }
        ],
        address: '1790, Eglinton Ave East, Toronto, ON, M4A2T3'
      }
    ]
  }

}
