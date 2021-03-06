import { Contract } from './contract';

function maxReading(readings: Reading[]) {
    let max = null;
    readings.forEach(reading => {
        max = max == null ? reading.value : Math.max(max, reading.value);
    });
    return max;
}

function minReading(readings: Reading[]) {
    let min = null;
    readings.forEach(reading => {
        min = min == null ? reading.value : Math.min(min, reading.value);
    });
    return min;
}

abstract class BaseShipment {
    shipmentId?: number;
    productName: string;
    description: string;
    quantity: {
        number: number;
        units: string;
        currency: string
        value: number;
    };
    source: string;
    destination: string;
    primaryImgUrl?: string;
}

export class Reading {
    value: number;
    timestamp: number;
}

export class SimpleShipment extends BaseShipment {
    sellerId: number;
    ambientTempReading: Reading;
    tempReading: Reading;
    humidReading: Reading;
    vocReading: Reading;
    freshness: Reading;
    contractIds: number;
}

export class Shipment extends BaseShipment {
    sellerId: number;
    ambientTempReadings: Reading[];
    tempReadings: Reading[];
    humidReadings: Reading[];
    vocReadings: Reading[];
    freshnessReadings: Reading[];
    contracts: Contract[];
    images: string[];
    timestamps: any[];

    latestContract() {
        return this.contracts ? this.contracts[this.contracts.length - 1] : null;
    }

    boundaryReadings() {
        return {
            ambientTemp: maxReading(this.ambientTempReadings),
            temp: maxReading(this.tempReadings),
            humid: maxReading(this.humidReadings),
            voc: maxReading(this.vocReadings),
            freshness: minReading(this.freshnessReadings)
        };
    }
}

export function boundaryReadings(shipment: Shipment) {
    if (shipment == null) {
        return null;
    }
    return {
        ambientTemp: maxReading(shipment.ambientTempReadings),
        temp: maxReading(shipment.tempReadings),
        humid: maxReading(shipment.humidReadings),
        voc: maxReading(shipment.vocReadings),
        freshness: minReading(shipment.freshnessReadings)
    };
}
