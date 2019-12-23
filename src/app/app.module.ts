import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavWidgetComponent } from './base/nav-widget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BmsErrorListComponent } from './BMS/bms-error-list.component';
import { BmsUpdateComponent } from './BMS/bms-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavWidgetComponent,
    DashboardComponent,
    BmsErrorListComponent,
    BmsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
