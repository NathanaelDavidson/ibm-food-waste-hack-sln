import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../models/contract';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuyerContractService {

  constructor(private http: HttpClient) { }

  getPendingOffers(): Observable<Contract[]> {
    return this.http.get<Contract[]>(environment.urls.buyerOffers).pipe(
      take(1)
    );
  }

  makeOffer(offer: Contract): Observable<any> {
    return this.http.post(environment.urls.makeOffer, offer, {
       headers: {'Content-Type': 'application/json'}
    }).pipe(
      take(1)
    );
  }
}
