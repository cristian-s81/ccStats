import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CriptoCurrency } from '../models/CriptoCurrency';
import { CCdata, CCInput } from '../models/CCInput';

@Injectable({
  providedIn: 'any'
})
export class CurrencyDataService {

  private res : Array<CriptoCurrency> = [];
  
  constructor(private http: HttpClient) { }

  getCurrencyData(fiat : String, ccId : String) : Observable<CriptoCurrency[]> {
    return this.http.get<CriptoCurrency[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency="+fiat+"&ids="+ccId);
  }

  // getCurrencyDataList(ccdata : CCdata[]) : CriptoCurrency[] {
  //   ccdata.forEach(cc => {
  //     this.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CriptoCurrency[]) => 
  //     {
  //       console.log(ccList[0].name);
  //       this.res.push(ccList[0]);
  //     },
  //     error => console.log(error.status)
  //     );;

  //   });
  //   return this.res;
  // }

}
