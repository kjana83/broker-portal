import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { User } from '../model/user.model';

@Component({
  selector: 'bms',
  templateUrl: './bms.component.html'
})
export class BMSComponent implements OnInit {
  user: User;
  constructor(private sessionService: SessionService) {

  }
  ngOnInit() {
    this.user = this.sessionService.currentUser;
  }
}
