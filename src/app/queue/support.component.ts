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
  chatStatusLabel
  constructor(public sessionService: SessionService,
    private chatService: ChatService,
    private modalService: NgbModal) { }

  startChat(req) {
    this.chatService.initChat(req.User);
    req.statusLabel = 'Chat Started';
  }


  open() {
    this.modalService.open(BMSReviewComponent);
  }
}
