import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BMSRequestComponent } from './bms-request.component';
import { SupportComponent } from '../queue/support.component';
import { ToastsContainer } from '../base/toast-container.component';
import { CustomerSearchComponent } from '../search/customer-search.component';
import { SearchResultsComponent } from '../search/search-results.component';
import { GuidedTourModule } from 'ngx-guided-tour';

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
    BMSConfirmationComponent,
    BMSRequestComponent,
    SupportComponent,
    ToastsContainer,
    CustomerSearchComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BMSRoutingModule,
    NgApexchartsModule,
    GuidedTourModule.forRoot()
  ],
  entryComponents: [
    BMSReviewComponent,
    BMSRequestComponent
  ],
  providers: [],
  bootstrap: [BMSComponent]
})
export class BMSModule { }
