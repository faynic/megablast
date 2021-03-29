import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShopFloorViewComponent } from './shop-floor-view/shop-floor-view.component';
import { FrontFloorViewComponent } from './front-floor-view/front-floor-view.component';

import { MaintenanceFormViewComponent } from './maintenance-form-view/maintenance-form-view.component';

import { MaintenanceLogsViewComponent } from './maintenance-logs-view/maintenance-logs-view.component';
import { AddMaintenanceLogComponent } from './add-maintenance-log/add-maintenance-log.component';

import { MachineDetailsViewComponent } from './machine-details-view/machine-details-view.component';

import { MachinePartsComponent } from './machine-parts/machine-parts.component';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
