import { Component } from "@angular/core";
import { SessionService } from '../services/session.service';
import { ChatService } from '../chat/chat.service';
import { User } from '../model/user.model';
import { BMSReviewComponent } from '../BMS/bms-review.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'web-support',
  templateUrl: './support.component.html'
})
export class SupportComponent {

  constructor(public sessionService: SessionService,
    private chatService: ChatService,
    private modalService: NgbModal) { }

  startChat(user: User) {
    this.chatService.initChat(user);
  }


  open() {
    this.modalService.open(BMSReviewComponent);
  }
}
