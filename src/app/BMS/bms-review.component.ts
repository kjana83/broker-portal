import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { User } from '../model/user.model';

@Component({
  selector: 'bms-review',
  templateUrl: './bms-review.component.html'
})
export class BMSReviewComponent {
  user: User;
  constructor(private activeModel: NgbActiveModal,
    private router: Router,
    private sessionService: SessionService) {
    this.user = this.sessionService.currentUser;
  }
  close() {
    this.activeModel.close();
  }
  continue() {
    this.activeModel.close();
    this.router.navigate(['/bms/bms-confirm']);
  }
}
