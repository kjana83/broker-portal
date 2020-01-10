import { Component } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteErrorComponent } from './quote-error.component';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  constructor(private modalService: NgbModal) { }

  open() {
    this.modalService.open(QuoteErrorComponent);
  }
}
