import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { SellersRoutingModule } from './sellers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';
import { ShipmentOverviewComponent } from './shipment-overview/shipment-overview.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShipmentDataComponent } from './shipment-detail/shipment-data/shipment-data.component';
import { ShipmentDataTableComponent } from './shipment-detail/shipment-data/shipment-data-table/shipment-data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NewShipmentComponent,
    ShipmentOverviewComponent,
    ShipmentDetailComponent,
    ShipmentDataComponent,
    ShipmentDataTableComponent,
    SellerHomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    SellersRoutingModule,
    SharedModule
  ]
})
export class SellersModule { }
