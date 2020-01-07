import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'bms-review',
  templateUrl: './bms-review.component.html'
})
export class BMSReviewComponent {
  constructor(private activeModel: NgbActiveModal, private router: Router) { }
  close() {
    this.activeModel.close();
  }
  continue() {
    this.activeModel.close();
    this.router.navigate(['/bms/bms-confirm']);
  }
}
