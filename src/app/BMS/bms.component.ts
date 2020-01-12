import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { User } from '../model/user.model';
import { GuidedTourService, GuidedTour, Orientation } from 'ngx-guided-tour';

@Component({
  selector: 'bms',
  templateUrl: './bms.component.html'
})
export class BMSComponent implements OnInit {
  user: User;
  dashboardTour: GuidedTour;
  constructor(private sessionService: SessionService,
    private guidedTourService: GuidedTourService) {

  }
  ngOnInit() {
    this.user = this.sessionService.currentUser;
    this.dashboardTour = {
      tourId: 'bmsTour',
      steps: [
        {
          title: 'Broker portal entry',
          selector: '.tourWidget',
          orientation: Orientation.Bottom,
          content: 'Broker portal is a your single platform to perform all your policy transaction needs across all personal lines products.'
        },
        {
          title: 'NB Monthly Chart',
          selector: '.nbMonthlyChart',
          content: 'Last 3 months new business monthly chart.',
          orientation: Orientation.Top
        },
        {
          title: 'Menu',
          selector: '.tourMenu',
          content: 'Vertical menu helps you to quickly navigate into respective transactions',
          orientation: Orientation.Right
        },
        {
          title: 'BMS Summary',
          selector: '.tourBMSSummary',
          content: 'View summary of BMS upload request and convert pending request into policy by providing missing information.',
          orientation: Orientation.Top
        },
        {
          title: 'Activity List',
          selector: '.tourActivityList',
          content: 'Activity list is the place where you want to track UW pending list, Renewal list, Cancellation list.',
          orientation: Orientation.Top
        }

      ]
    };
    // setTimeout(() => {
    //   this.guidedTourService.startTour(this.dashboardTour);
    // }, 1000);
    this.sessionService.startTour().subscribe(() => {
      console.log('tour started');
      this.guidedTourService.startTour(this.dashboardTour);
    });
  }
}
