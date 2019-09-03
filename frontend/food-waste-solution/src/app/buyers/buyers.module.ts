import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyersRoutingModule } from './buyers-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { ShipmentDataComponent } from './shipment-detail/shipment-data/shipment-data.component';
import { ShipmentDataTableComponent } from './shipment-detail/shipment-data/shipment-data-table/shipment-data-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BiddingFormComponent } from './bidding-form/bidding-form.component';
import { BuyerShipmentOverviewComponent } from './buyer-shipment-overview/buyer-shipment-overview.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShipmentDetailComponent,
    ShipmentDataComponent,
    ShipmentDataTableComponent,
    BiddingFormComponent,
    BuyerShipmentOverviewComponent,
    OffersComponent,
  ],
  imports: [
    CommonModule,
    BuyersRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class BuyersModule { }
