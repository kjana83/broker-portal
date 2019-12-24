
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;
  userId;
  private url = 'ws://localhost:5000';
  constructor() {
    this.socket = io(this.url);

    this.socket.on('connect', () => {
      this.userId = this.socket.id;
      console.log(this.socket.id);
    });
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  to(toUserId: string, message: string) {
    if (message === 'Send Policy') {
      this.socket.emit('communicate', { toUserId, message, policyNumber: 'W101004' });
    } else {
      this.socket.emit('communicate', { toUserId, message });
    }
  }
}
