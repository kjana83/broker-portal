import { NgModule } from "@angular/core";
import { QuoteComponent } from './quote.component';
import { VehicleComponent } from './vehicle.component';
import { DriverComponent } from './driver.component';
import { SummaryComponent } from './summary.component';
import { CommonModule } from '@angular/common';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteErrorComponent } from './quote-error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    QuoteRoutingModule,
    NgbModule,
  ],
  declarations: [
    QuoteComponent,
    VehicleComponent,
    DriverComponent,
    SummaryComponent,
    QuoteErrorComponent
  ],
  bootstrap: [QuoteComponent],
  entryComponents: [
    QuoteErrorComponent
  ]
})
export class QuoteModule {

}
