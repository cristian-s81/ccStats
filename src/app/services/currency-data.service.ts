import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CriptoCurrency } from '../models/CriptoCurrency';

@Injectable({
  providedIn: 'any'
})
export class CurrencyDataService {

  constructor(private http: HttpClient) { }

  getCurrencyData(fiat : String, ccId : String) : Observable<CriptoCurrency[]> {
    return this.http.get<CriptoCurrency[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency="+fiat+"&ids="+ccId);
  }

}
