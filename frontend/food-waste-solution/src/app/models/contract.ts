import { Shipment } from './shipment';

abstract class BaseContract {
    buyerId: number;
    tempThreshold: number;
    humidThreshold: number;
    vocThreshold: number;
    freshnessThreshold: number;
    ambientTempThreshold: number;
    price: number;
    status: 'pending' | 'accepted' | 'active' | 'declined' | 'void';
}

export class SimpleContract extends BaseContract {
    shipmentId: number;
}

export class Contract extends BaseContract {
    shipment: Shipment;
}
