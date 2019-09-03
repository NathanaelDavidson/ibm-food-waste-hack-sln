import { Shipment } from './shipment';

export class Contract {
    buyerId: number;
    contractId: number;
    tempThreshold: number;
    humidThreshold: number;
    vocThreshold: number;
    freshnessThreshold: number;
    ambientTempThreshold: number;
    price: number;
    status: 'pending' | 'accepted' | 'active' | 'declined' | 'void';
    shipment: number;
}
