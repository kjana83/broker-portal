import { Component } from "@angular/core";
import { SessionService } from '../services/session.service';

@Component({
    selector: 'nav-widget',
    templateUrl: './nav-widget.component.html'
})
export class NavWidgetComponent {
    constructor(public sessionService: SessionService) {

    }
}
