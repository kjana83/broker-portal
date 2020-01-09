import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { WebsocketService } from '../services/websocket.service';
import { User } from '../model/user.model';
import { ChatMessage } from '../model/chatMessage.model';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})
export class ChatComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  chatWithUser: User;
  messages: any[] = [];
  msgInput: string;
  chatMsgs: ChatMessage[] = [];
  constructor(
    private webSocketService: WebsocketService,
    private router: Router, private chatService: ChatService) {
    this.chatService.startAChat().subscribe(user => {
      this.startChatWith(user);
    });
  }

  ngOnInit() {
    this.webSocketService.listen('message').subscribe((data: any) => {
      if (!this.chatWithUser) this.chatWithUser = new User();
      if (!this.filteredUsers.some(user => { return user.userName === data.userName })) {
        const user = this.users.find(user => { return user.userName === data.userName });
        if (user) this.filteredUsers.push(user);
      }
      // this.chatWithUser.userId = data.from;˝
      // this.chatWithUser.userName = data.userName;
      // this.messages.push(data);
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

      incomingChat.messages.push(data)
      incomingChat.newMessage = true;

      let activeChat = _.find(this.chatMsgs, (val) => {
        return this.chatWithUser.userName === val.user.userName;
      });
      if (activeChat) {
        this.messages = _.clone(activeChat.messages);
      }
      let activeUser = _.find(this.users, (user: User) => {
        return user.userName === data.userName && user.userName !== this.chatWithUser.userName;
      });
      if (activeUser) activeUser.newMessage = true;
      console.log(this.chatMsgs);
    });

    this.webSocketService.listen('users').subscribe((users: any[]) => {
      console.log(users);
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
      this.messages = _.clone(activeChat.messages);
    } else {
      activeChat = new ChatMessage();
      activeChat.user = user;
      this.chatMsgs.push(activeChat);
      this.messages = [];
    }
    let activeUser = _.find(this.users, (usr: User) => {
      return usr.userName === this.chatWithUser.userName;
    });
    if (activeUser) activeUser.newMessage = false;
    console.log(this.chatMsgs);
    if (!this.filteredUsers.some(usr => { return user.userName === usr.userName })) {
      const identifiedUser = this.users.find(usr => { return user.userName === usr.userName });
      if (identifiedUser) this.filteredUsers.push(identifiedUser);
    }
  }

  communicateWithUser(user: User, message: string) {
    const data = { from: 'me', message };
    this.webSocketService.to(user.userId, message);
    let activeChat = _.find(this.chatMsgs, (data: ChatMessage) => {
      return data.user.userName === user.userName;
    });
    if (!activeChat) {
      activeChat = new ChatMessage();
      activeChat.user = user;
      activeChat.messages.push(data);
      this.chatMsgs.push(activeChat);
    } else {
      activeChat.messages.push(data);
    }
    this.messages.push(data);
    this.msgInput = '';
    console.log(this.messages);
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
