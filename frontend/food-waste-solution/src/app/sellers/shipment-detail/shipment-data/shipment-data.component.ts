import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Shipment, Reading } from 'src/app/models/shipment';
import { ChartPoint } from 'chart.js';

export class AnnotatedDataSet {
  longLabel: string;
  shortLabel: string;
  data: ChartPoint[];
  stats: {
    min: number,
    max: number,
    avg: number,
  };
  firstReadingTimestamp: Date;
  latestReading: Reading;
}


function annotateReadings(readings: Reading[], shortLabel: string, longLabel: string): AnnotatedDataSet {
  let min: number;
  let max: number;
  let avg: number;
  let minX: number;
  let latestReading: Reading;
  let sum = 0;
  let count = 0;
  const data = readings.map((reading: Reading) => {
    const timestamp = +reading.timestamp;
    const value = +reading.value;
    count++;
    sum += value;
    if (!latestReading || latestReading.timestamp < reading.timestamp) {
      latestReading = reading;
    }
    min = min != null ? Math.min(min, value) : value;
    max = max != null ? Math.max(max, value) : value;
    minX = minX != null ? Math.min(minX, timestamp) : timestamp;
    const date = new Date(timestamp);
    return {t: date, y: value, x: date};
  });
  if (count) {
    avg = sum / count;
  }
  return {
    longLabel,
    shortLabel,
    data,
    stats: {
      min,
      max,
      avg,
    },
    firstReadingTimestamp: minX != null ? new Date(minX) : null,
    latestReading
  };
}

function getAnnotatedDataSets(shipment: Shipment): AnnotatedDataSet[] {
  return [
    annotateReadings(shipment.freshnessReadings, 'frsh', 'Freshness'),
    annotateReadings(shipment.tempReadings, 'temp', 'Temperature'),
    annotateReadings(shipment.ambientTempReadings, 'amb', 'Ambient Temperature'),
    annotateReadings(shipment.humidReadings, 'humid', 'Carbon Dioxide'),
    annotateReadings(shipment.vocReadings, 'voc', 'Volatile Organic Compound')
  ];
}

@Component({
  selector: 'app-shipment-data',
  templateUrl: './shipment-data.component.html',
  styleUrls: ['./shipment-data.component.scss']
})
export class ShipmentDataComponent implements OnInit, OnChanges {
  @Input() shipment: Shipment;
  shipmentData: AnnotatedDataSet[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.shipmentData = getAnnotatedDataSets(this.shipment);
  }

}
