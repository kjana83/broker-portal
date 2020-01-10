import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'quote-error',
  templateUrl: './quote-error.component.html'
})
export class QuoteErrorComponent {
  constructor(private activeModel: NgbActiveModal, private router: Router) { }
  close() {
    this.activeModel.close();
  }
  continue() {
    this.activeModel.close();
    this.router.navigate(['/bms/bms-update/R2323932']);
  }
}
