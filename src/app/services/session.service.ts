import { Injectable } from "@angular/core";
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentUser: User;
  constructor(private webSocketService: WebsocketService) { }
  addUser(username: string) {
    const userId = this.webSocketService.userId;
    if (this.currentUser) {
      this.currentUser.sessionId.push(userId);
    } else {
      this.currentUser = new User();
      this.currentUser.username = username;
      this.currentUser.sessionId = [];
      this.currentUser.sessionId.push(userId);
      this.webSocketService.userName = username;
      this.webSocketService.emit('adduser', { userId: userId, userName: username });
    }
  }
}

class User {
  username: string;
  sessionId: string[];
}
