import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { CCdata, InputEntry } from '../models/CCInput';
import { Adapter } from '../models/Adapter';
import { Util } from '../Util/Util';
import { CCModel } from '../models/CCMoldel';
import { BalanceData } from '../models/BalanceData';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  getCurrencyData(fiat: String, ccId: String): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + fiat + "&ids=" + ccId);
  }

  getCurrencyDataList(ccData: CCdata[]): CCModel {
    let ccModel: CCModel = new CCModel();
    ccModel.cryptos = [];
    ccModel.balance = new BalanceData();
    ccModel.balance.gainLoss = 0;
    ccModel.balance.actualValue = 0;

    ccData.forEach(cc => {
      this.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CryptoCurrency[]) => {
        ccList[0].entryList = Adapter.prepareEntryList(<InputEntry[]>cc.entryList, ccList[0].current_price);
        ccList[0].trending = Util.prepareTrending(ccList[0].price_change_percentage_24h);
        const avgData: number[] = Util.calculateBuyPriceAverage(<InputEntry[]>cc.entryList);
        ccList[0].totalQty = avgData[0];
        ccList[0].buyPriceAverage = avgData[1];
        ccList[0].actualValue = Math.round(ccList[0].totalQty * ccList[0].buyPriceAverage);
        ccList[0].buyPriceAveragePerc = Util.calculatePerc(ccList[0].current_price, ccList[0].buyPriceAverage);
        ccList[0].buyPriceAverageGainLoss = Util.calculateActualGainLoss(ccList[0].totalQty, ccList[0].current_price, ccList[0].buyPriceAverage);
        ccModel.balance.gainLoss = ccModel.balance.gainLoss + ccList[0].buyPriceAverageGainLoss;
        ccModel.balance.actualValue = ccModel.balance.actualValue + Math.round(ccList[0].totalQty * ccList[0].current_price);
        ccModel.cryptos.push(ccList[0]);
        ccModel.cryptos.sort((a, b) => b.buyPriceAveragePerc - a.buyPriceAveragePerc);
        ccModel.balance.loading = ccData.length > ccModel.cryptos.length;
      },
        error => console.log(error.status)
      );
    });

    return ccModel;
  }

}
