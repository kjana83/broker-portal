import { Component, Input } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';
import { Quote } from '../model/quote.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Session } from 'protractor';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'bms-request',
  templateUrl: './bms-request.component.html'
})
export class BMSRequestComponent {
  @Input() quote: Quote;
  bmsRequestForm: FormGroup;
  constructor(private activeModel: NgbActiveModal,
    private router: Router,
    private sessionService: SessionService,
    private websocketService: WebsocketService,
    private fb: FormBuilder) {
    this.bmsRequestForm = this.fb.group({
      support: new FormControl(),
      reason: new FormControl()
    });

  }
  close() {
    this.activeModel.close();
  }

  submit() {
    this.websocketService.emit('support', {
      user: this.sessionService.currentUser,
      branch: 'GTA-branch',
      quote: this.quote,
      reason: this.bmsRequestForm.get('reason').value,
      support: this.bmsRequestForm.get('support').value,
      date: new Date().toDateString()
    });
    this.activeModel.close();
  }
}
