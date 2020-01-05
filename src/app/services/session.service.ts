import { Injectable } from "@angular/core";
import { WebsocketService } from './websocket.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentUser: User;
  constructor(private webSocketService: WebsocketService) { }
  addUser(user: User) {
    const userId = this.webSocketService.userId;
    this.currentUser = user;
    this.currentUser.userId = userId;
    this.webSocketService.userName = user.userName
    this.webSocketService.emit('adduser', { userId: userId, userName: user.userName });
  }
}

