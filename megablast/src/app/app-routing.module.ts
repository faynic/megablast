import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ShopFloorViewComponent } from './shop-floor-view/shop-floor-view.component';
import { MachinePartsComponent } from './machine-parts/machine-parts.component';
import { DailyReportViewComponent } from './daily-report-view/daily-report-view.component';
import { ShiftReportsComponent } from './shift-reports/shift-reports.component';

const routes: Routes = [
    {path: '', redirectTo: 'shop', pathMatch: 'full'},
    {path: 'shopfloor', component: ShopFloorViewComponent},
    {path: 'parts', component: MachinePartsComponent},
    {path: 'reports', component: DailyReportViewComponent},
    {path: 'shiftlogs', component: ShiftReportsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
