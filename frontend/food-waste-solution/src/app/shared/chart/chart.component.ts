import { Component, Input, OnChanges } from '@angular/core';
import { Reading } from 'src/app/models/shipment';
import { SingleDataSet } from 'ng2-charts';
import { AnnotatedDataSet } from 'src/app/sellers/shipment-detail/shipment-data/shipment-data.component';

export class DataSet {
  data: Reading[];
  label: string;
}

export class Constants {
  min: number;
  max: number;
  threshold: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @Input() dataSet: AnnotatedDataSet;
  chartDataSets: { data: SingleDataSet, label: string }[];
  constructor() { }

  ngOnChanges() {
    this.chartDataSets = [
      {
        label: this.dataSet.longLabel,
        data: this.dataSet.data
      },
    ].concat(
      Object.keys(this.dataSet.stats).map(label => {
        const value = this.dataSet.stats[label];
        return {
          label,
          data: [
            {
              t: this.dataSet.firstReadingTimestamp,
              y: value
            }, {
              t: new Date(),
              y: value
            }
          ]
        };
      })
    );
  }

}
