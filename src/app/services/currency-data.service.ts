import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { CriptoCurrency } from '../models/CriptoCurrency';
import { CCdata, InputEntry } from '../models/CCInput';
import { Adapter } from '../models/Adapter';
import { Util } from '../Util/Util';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  // private ccListSubject = new Subject<any>();

  constructor(private http: HttpClient) { }


  // sendMessage(cclist: Array<CriptoCurrency>) {
  //   this.ccListSubject.next({ currencyList: cclist });
  // }
  // sendMessage(ccData: CCdata[]) {
  //   this.ccListSubject.next({ currencyList: this.getCurrencyDataList(ccData) });
  // }

  // clearMessages() {
  //   this.ccListSubject.next();
  // }

  // getMessage(): Observable<any> {
  //   return this.ccListSubject.asObservable();
  // }





  /*
  
    getCurrencyData__NEW(fiat: String, ccId: String): Observable<CriptoCurrency[]> {
      return this.http.get<CriptoCurrency[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + fiat + "&ids=" + ccId);
    }
  
    getCurrencyDataList__NEW(ccData: CCdata[]): Observable<[Array<CriptoCurrency>, number]> {
      let currencyList: Array<CriptoCurrency> = [];
      let totalGainLoss: number = 0;
      ccData.forEach(cc => {
        this.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CriptoCurrency[]) => {
          ccList[0].entryList = Adapter.prepareEntryList(<InputEntry[]>cc.entryList, ccList[0].current_price);
          ccList[0].percColor = Util.preparePercColor(ccList[0].price_change_percentage_24h);
          ccList[0].trending = Util.prepareTrending(ccList[0].price_change_percentage_24h);
          const avgData: number[] = Util.calculateBuyPriceAverage(<InputEntry[]>cc.entryList);
          ccList[0].totalQty = avgData[0];
          ccList[0].buyPriceAverage = avgData[1];
          ccList[0].buyPriceAveragePerc = Util.calculatePerc(ccList[0].current_price, ccList[0].buyPriceAverage);
          ccList[0].buyPriceAverageGainLoss = Util.calculateActualGainLoss(ccList[0].totalQty, ccList[0].current_price, ccList[0].buyPriceAverage);
          totalGainLoss = totalGainLoss + ccList[0].buyPriceAverageGainLoss;
          console.log(totalGainLoss);
          currencyList.push(ccList[0]);
        },
          error => console.log(error.status)
        );
      });
  
      return [currencyList, totalGainLoss];
    }
  */









  getCurrencyData(fiat: String, ccId: String): Observable<CriptoCurrency[]> {
    return this.http.get<CriptoCurrency[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + fiat + "&ids=" + ccId);
  }

  getCurrencyDataList(ccData: CCdata[]): [Array<CriptoCurrency>, number] {
    let currencyList: Array<CriptoCurrency> = [];
    let totalGainLoss: number = 0;
    ccData.forEach(cc => {
      this.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CriptoCurrency[]) => {
        ccList[0].entryList = Adapter.prepareEntryList(<InputEntry[]>cc.entryList, ccList[0].current_price);
        ccList[0].percColor = Util.preparePercColor(ccList[0].price_change_percentage_24h);
        ccList[0].trending = Util.prepareTrending(ccList[0].price_change_percentage_24h);
        const avgData: number[] = Util.calculateBuyPriceAverage(<InputEntry[]>cc.entryList);
        ccList[0].totalQty = avgData[0];
        ccList[0].buyPriceAverage = avgData[1];
        ccList[0].buyPriceAveragePerc = Util.calculatePerc(ccList[0].current_price, ccList[0].buyPriceAverage);
        ccList[0].buyPriceAverageGainLoss = Util.calculateActualGainLoss(ccList[0].totalQty, ccList[0].current_price, ccList[0].buyPriceAverage);
        totalGainLoss = totalGainLoss + ccList[0].buyPriceAverageGainLoss;
        console.log(totalGainLoss);
        currencyList.push(ccList[0]);
      },
        error => console.log(error.status)
      );
    });

    return [currencyList, totalGainLoss];
  }

}
