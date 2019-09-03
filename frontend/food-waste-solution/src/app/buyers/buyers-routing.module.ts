import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [
  {path: 'shipments/:id', component: ShipmentDetailComponent},
  {path: 'offers', component: OffersComponent },
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyersRoutingModule { }
