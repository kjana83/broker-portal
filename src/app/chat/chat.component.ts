import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
  users: string[] = [];
  chatWithUser: any;
  messages: any[] = [];
  msgInput: string;
  constructor(
    private webSocketService: WebsocketService,
    private router: Router) {

  }

  ngOnInit() {
    this.webSocketService.listen('message').subscribe((data: any) => {
      if (!this.chatWithUser) this.chatWithUser = {};
      this.chatWithUser.userId = data.from;
      this.chatWithUser.userName = data.userName;
      this.messages.push(data);
    });

    this.webSocketService.listen('users').subscribe((users: any[]) => {
      this.users = users.filter((user) => {
        return user.userId !== this.webSocketService.userId;
      });
    });
  }

  startChatWith(user: any) {
    this.chatWithUser = user;
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
