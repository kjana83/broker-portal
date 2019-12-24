import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
  users: string[] = [];
  chatWithUser: string;
  messages: any[] = [];
  msgInput: string;
  constructor(
    private webSocketService: WebsocketService,
    private router: Router) {

  }

  ngOnInit() {
    this.webSocketService.listen('message').subscribe((data: any) => {
      this.chatWithUser = data.from;
      this.messages.push(data);
    });

    this.webSocketService.listen('users').subscribe((users: string[]) => {
      this.users = users.filter((user) => {
        return user !== this.webSocketService.userId;
      });
    });
  }

  startChatWith(userId: string) {
    this.chatWithUser = userId;
  }

  communicateWithUser(userId: string, message: string) {
    const data = { from: 'me', message };
    this.webSocketService.to(userId, message);
    this.messages.push(data);
    this.msgInput = '';
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
