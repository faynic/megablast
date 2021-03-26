import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ShopFloorViewComponent } from './shop-floor-view/shop-floor-view.component';
import { MachinePartsComponent } from './machine-parts/machine-parts.component';

const routes: Routes = [
    {path: '', redirectTo: 'shop', pathMatch: 'full'},
    {path: 'shopfloor', component: ShopFloorViewComponent},
    {path: 'parts', component: MachinePartsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
