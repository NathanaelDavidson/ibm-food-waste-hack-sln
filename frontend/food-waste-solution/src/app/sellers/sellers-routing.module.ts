import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';


const routes: Routes = [
  {
    path: 'shipments', children: [
      { path: 'create', component: NewShipmentComponent }
    ]
  },
  { path: '', component: SellerHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
