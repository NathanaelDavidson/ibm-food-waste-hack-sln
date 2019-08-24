import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ShipmentSummaryTileComponent } from './shipment-summary-tile/shipment-summary-tile.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ShipmentSummaryListComponent } from './shipment-summary-list/shipment-summary-list.component';
import { ContractSummaryComponent } from './contract-summary/contract-summary.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    GalleryComponent,
    ChartComponent,
    ShipmentSummaryTileComponent,
    ImageUploadComponent,
    ShipmentSummaryListComponent,
    ContractSummaryComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    NgxGalleryModule,
    MatIconModule
  ],
  exports: [
    ToolbarComponent,
    GalleryComponent,
    ChartComponent,
    ShipmentSummaryTileComponent,
    ImageUploadComponent
  ]
})
export class SharedModule { }
