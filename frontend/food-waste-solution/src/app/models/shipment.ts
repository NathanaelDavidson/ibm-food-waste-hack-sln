import { SimpleContract } from './contract';
import { User } from './user';

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
    shipmentId: number;
    productName: string;
    description: string;
    quantity: {
        value: number;
        units: string;
    };
    source: string;
    destination: string;
    primaryImgUrl: string;
}

export class Reading {
    value: number;
    timestamp: number;
}

export class SimpleShipment extends BaseShipment {
    sellerId: number;
    ambientTempReading: Reading;
    tempReading: Reading;
    co2Reading: Reading;
    vocReading: Reading;
    freshness: Reading;
    contractIds: number;
}

export class Shipment extends BaseShipment {
    seller: User;
    ambientTempReadings: Reading[];
    tempReadings: Reading[];
    co2Readings: Reading[];
    vocReadings: Reading[];
    freshness: Reading[];
    contracts: SimpleContract[];
    updateImgUrls: string[];

    get latestContract() {
        return this.contracts ? this.contracts[this.contracts.length - 1] : null;
    }

    boundaryReadings() {
        return {
            ambientTemp: maxReading(this.ambientTempReadings),
            temp: maxReading(this.tempReadings),
            co2: maxReading(this.tempReadings),
            voc: maxReading(this.vocReadings),
            freshness: minReading(this.freshness)
        };
    }
}
