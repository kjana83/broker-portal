import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BmsErrorListComponent } from './bms-error-list.component';
import { BmsUpdateComponent } from './bms-update.component';
import { BMSComponent } from './bms.component';
import { BMSConfirmationComponent } from './bms-confirmation.component';
import { BMSRequestComponent } from './bms-request.component';
import { SupportComponent } from '../queue/support.component';


const routes: Routes = [
  {
    path: '', component: BMSComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'bms-error', component: BmsErrorListComponent
      },
      {
        path: 'bms-confirm', component: BMSConfirmationComponent
      },
      {
        path: 'bms-support', component: SupportComponent
      },
      {
        path: 'bms-update/:quoteNumber', component: BmsUpdateComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BMSRoutingModule { }
