import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [
  {
    path: 'shipments', children: [
      { path: 'create', component: NewShipmentComponent }
    ]
  },
  { path: 'shipments/:id', component: ShipmentDetailComponent },
  { path: 'offers', component: OffersComponent },
  { path: '', component: SellerHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
