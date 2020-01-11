import { Component } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteErrorComponent } from './quote-error.component';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./style.scss']
})
export class SummaryComponent {
  quotes: [];
  constructor(private modalService: NgbModal,
    public sessionService: SessionService) {

  }
  open() {
    this.modalService.open(QuoteErrorComponent);
  }
}
