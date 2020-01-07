import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { BMSComponent } from './bms.component';
import { NavWidgetComponent } from '../base/nav-widget.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BmsErrorListComponent } from './bms-error-list.component';
import { BmsUpdateComponent } from './bms-update.component';
import { ChatComponent } from '../chat/chat.component';
import { BMSRoutingModule } from './bms-routing.module';
import { CommonModule } from '@angular/common';
import { NavWidgetUWComponent } from '../base/nav-widget-uw.component';
import { BMSReviewComponent } from './bms-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BMSConfirmationComponent } from './bms-confirmation.component';

@NgModule({
  declarations: [
    BMSComponent,
    NavWidgetComponent,
    NavWidgetUWComponent,
    DashboardComponent,
    BmsErrorListComponent,
    BmsUpdateComponent,
    ChatComponent,
    BMSReviewComponent,
    BMSConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BMSRoutingModule,
    NgApexchartsModule
  ],
  entryComponents: [
    BMSReviewComponent
  ],
  providers: [],
  bootstrap: [BMSComponent]
})
export class BMSModule { }
