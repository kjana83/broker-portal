import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BMSReviewComponent } from './bms-review.component';
import { Quote } from '../model/quote.model';
import { BMSRequestComponent } from './bms-request.component';

@Component({
  selector: 'bms-update',
  templateUrl: './bms-update.component.html'
})
export class BmsUpdateComponent implements OnInit {
  quotes: Quote[] = [];
  quote: Quote;
  title: string;
  @ViewChild('bmsReview', { static: false }) bmsReviewComponent: BMSReviewComponent;

  constructor(private activatedRoute: ActivatedRoute,
    private modalService: NgbModal) {
    this.quotes = [
      { quoteNumber: 'R2323932', date: '03-Jan-2020', status: 'Pending Clarification', lob: 'Property', reason: '2 Mandatory Claim Information missing' },
      { quoteNumber: 'R2783633', date: '12-Jan-2020', status: 'Missing Information', lob: 'Auto', reason: 'Missing Conviction Details' },
      { quoteNumber: 'R2323765', date: '03-Dec-2019', status: 'Pending Clarification', lob: 'Property', reason: 'Year built deatils not updated' },
      { quoteNumber: 'R2726489', date: '18-Mar-2020', status: 'UW Approval Required', lob: 'Auto', reason: 'Exceeded UW threshold' },

    ];
  }

  ngOnInit() {
    const quoteNumber = this.activatedRoute.snapshot.params.quoteNumber;
    this.quote = this.quotes.filter((quote: Quote) => {
      return quote.quoteNumber === quoteNumber;
    })[0];
    this.title = this.quote.lob === 'Auto' ? 'BMS Auto Update' : 'BMS Property Update';
  }

  open() {
    this.modalService.open(BMSReviewComponent);
  }

  startChat() {

    const modalRef = this.modalService.open(BMSRequestComponent);
    modalRef.componentInstance.quote = this.quote;
  }
}
