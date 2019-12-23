import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmsErrorListComponent } from './BMS/bms-error-list.component';
import { BmsUpdateComponent } from './BMS/bms-update.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'bms-error', component: BmsErrorListComponent
  },
  {
    path: 'bms-update/:quoteNumber', component: BmsUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
