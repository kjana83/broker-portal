import { Component, OnInit } from "@angular/core";
import { WebsocketService } from '../services/websocket.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'web-support',
  templateUrl: './support.component.html'
})
export class SupportComponent {

  constructor(public sessionService: SessionService) { }
}
