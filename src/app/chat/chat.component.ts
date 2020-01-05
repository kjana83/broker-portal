import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { WebsocketService } from '../services/websocket.service';
import { User } from '../model/user.model';
import { ChatMessage } from '../model/chatMessage.model';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
  users: User[] = [];
  chatWithUser: any;
  messages: any[] = [];
  msgInput: string;
  chatMsgs: ChatMessage[] = [];
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
      let incomingChat = _.find(this.chatMsgs, (val) => {
        return data.userName === val.user.userName
      });
      if (!incomingChat) {
        incomingChat = new ChatMessage();
        incomingChat.user = new User();
        incomingChat.user.userName = data.userName;
        incomingChat.user.userId = data.from;
        this.chatMsgs.push(incomingChat);
      }

      incomingChat.messages.push(data.message)
      incomingChat.newMessage = true;
      console.log(this.chatMsgs);
    });

    this.webSocketService.listen('users').subscribe((users: any[]) => {
      this.users = users.filter((user) => {
        return user.userId !== this.webSocketService.userId;
      });
    });
  }

  startChatWith(user: User) {
    this.chatWithUser = user;
    let activeChat = this.chatMsgs.find(val => { return user.userName === val.user.userName });
    if (activeChat) {
      activeChat.newMessage = false;
    } else {
      activeChat = new ChatMessage();
      activeChat.user = user;
      this.chatMsgs.push(activeChat);
    }
    console.log(this.chatMsgs);
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
