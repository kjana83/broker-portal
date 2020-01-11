import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  userSubject: Subject<User>;
  constructor() {
    this.userSubject = new Subject<User>();
  }
  startAChat(): Observable<User> {
    return this.userSubject.asObservable();
  }

  initChat(user: User) {
    this.userSubject.next(user);
  }
}
