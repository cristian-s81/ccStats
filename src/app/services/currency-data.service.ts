import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(private http: HttpClient) { }

  getCurrencyData(fiat : String, ccId : String) {
    // url: ,
    //this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency="+fiat+"&ids="+ccId).
  }
}
