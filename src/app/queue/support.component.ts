import { Component, OnInit } from "@angular/core";
import { WebsocketService } from '../services/websocket.service';
import { SessionService } from '../services/session.service';
import { ChatService } from '../chat/chat.service';
import { User } from '../model/user.model';

@Component({
  selector: 'web-support',
  templateUrl: './support.component.html'
})
export class SupportComponent {

  constructor(public sessionService: SessionService,
    private chatService: ChatService) { }

  startChat(user: User) {
    this.chatService.initChat(user);
  }
}
