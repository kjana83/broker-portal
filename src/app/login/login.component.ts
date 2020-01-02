import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { WebsocketService } from '../services/websocket.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string;
  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  submit() {
    this.sessionService.addUser(this.username);
    this.router.navigate(['bms/dashboard']);
  }
}
