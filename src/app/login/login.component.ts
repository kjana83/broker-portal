import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string;
  role = "broker";
  password: string;
  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  submit() {
    let user = new User();
    user.userName = this.username;
    user.role = this.role;
    this.sessionService.addUser(user);
    if (user.role === "broker") {
      if (this.sessionService.returnUrl) {
        this.router.navigate([this.sessionService.returnUrl]);
        this.sessionService.returnUrl = "";
      } else {
        this.router.navigate(['bms/dashboard']);
      }
    }
    else {
      this.router.navigate(['bms/customer-search']);
    }
  }
}
