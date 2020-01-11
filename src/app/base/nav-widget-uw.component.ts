import { Component } from "@angular/core";
import { SessionService } from '../services/session.service';

@Component({
    selector: 'nav-widget-uw',
    templateUrl: './nav-widget-uw.component.html'
})
export class NavWidgetUWComponent {
    constructor(public sessionService: SessionService) {

    }
}
