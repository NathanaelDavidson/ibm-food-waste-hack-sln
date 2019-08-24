import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Contract, SimpleContract } from './models/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  makeOffer(
    shipmentId: number,
    tempThreshold: number,
    ambientTempThreshold: number,
    humidThreshold: number,
    vocThreshold: number,
    freshnessThreshold: number,
    price: number
  ): Observable<any> {
    return this.http.post(environment.urls.makeOffer,
      { shipmentId, tempThreshold, ambientTempThreshold, humidThreshold, vocThreshold, freshnessThreshold, price },
      {
        headers: { 'Content-Type': 'application/json' }
      }).pipe(
        take(1)
      );
  }

  acceptOffer(offerId: number): Observable<any> {
    return this.http.post(environment.urls.acceptOffer, { offerId }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      take(1)
    );
  }

  cancelOffer(offerId: number): Observable<any> {
    return this.http.post(environment.urls.cancelOffer, {contractId: offerId}, {
      headers: {'Content-Type': 'application/json'}
    }).pipe(
      take(1)
    );
  }

  declineOffer(offerId: number): Observable<any> {
    return this.http.post(environment.urls.declineOffer, {contractId: offerId}, {
      headers: {'Content-Type': 'application/json'}
    }).pipe(
      take(1)
    );
  }

  getContract(contractId: number): Observable<Contract> {
    return this.http.post<Contract>(environment.urls.contractDetail, {
      contractId: contractId.toString(10)
    }).pipe(
      take(1)
    );
  }

  getPendingOffers(): Observable<SimpleContract[]> {
    return this.http.post<SimpleContract[]>(environment.urls.sellerOffers, {}).pipe(
      take(1)
    );
  }
}
