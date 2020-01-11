import { Injectable } from "@angular/core";
import { WebsocketService } from './websocket.service';
import { User } from '../model/user.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentUser: User;
  supportList: any[] = [];
  returnUrl: string;
  constructor(private webSocketService: WebsocketService,
    private toastService: ToastService) {
    this.webSocketService.listen('support').subscribe((data: any) => {
      this.toastService.show(`New support request from '${data.user.userName}'`, {
        classname: 'bg-success text-light',
        delay: 10000
      });
      data.statusLabel = 'Accept Chat';
      this.supportList.push(data);
    });
  }
  addUser(user: User) {
    const userId = this.webSocketService.userId;
    this.currentUser = user;
    this.currentUser.userId = userId;
    this.webSocketService.userName = user.userName
    this.webSocketService.emit('adduser', user);
  }

}

