import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ShopFloorViewComponent } from './shop-floor-view/shop-floor-view.component';
import { FrontFloorViewComponent } from './front-floor-view/front-floor-view.component';

import { MaintenanceFormViewComponent } from './maintenance-form-view/maintenance-form-view.component';

import { MaintenanceLogsViewComponent } from './maintenance-logs-view/maintenance-logs-view.component';
import { AddMaintenanceLogComponent } from './add-maintenance-log/add-maintenance-log.component';

import { MachineDetailsViewComponent } from './machine-details-view/machine-details-view.component';

import { MachinePartsComponent } from './machine-parts/machine-parts.component';
import { ToHoursPipe } from './to-hours.pipe';
import { ToPercentPipe } from './to-percent.pipe';
import { DailyReportViewComponent } from './daily-report-view/daily-report-view.component';


const routes: Routes = [
    {path: '', redirectTo: 'shop', pathMatch: 'full'},
    {path: 'shopfloor', component: ShopFloorViewComponent},
    {path: 'parts', component: MachinePartsComponent},
    {path: 'maintenanceForm', component: AddMaintenanceLogComponent},
    {path: 'logs', component: MaintenanceLogsViewComponent},
    {path: 'reports', component: DailyReportViewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ShopFloorViewComponent,
    FrontFloorViewComponent,
    MaintenanceFormViewComponent,
    MaintenanceLogsViewComponent,
    MachineDetailsViewComponent,
    MachinePartsComponent,
    AddMaintenanceLogComponent,
    ToHoursPipe,
    ToPercentPipe,
    DailyReportViewComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes, {enableTracing: true}
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
