import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { DriverComponent } from './driver.component';
import { SummaryComponent } from './summary.component';
import { NgModule } from '@angular/core';
import { QuoteComponent } from './quote.component';

const routes: Routes = [
  {
    path: '', component: QuoteComponent,
    children: [
      {
        path: '',
        redirectTo: 'vehicle',
        pathMatch: 'full'
      },
      {
        path: 'vehicle', component: VehicleComponent
      },
      {
        path: 'driver', component: DriverComponent
      },
      {
        path: 'summary', component: SummaryComponent
      },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
