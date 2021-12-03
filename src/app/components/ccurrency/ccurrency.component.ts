import { Component, Input, OnInit } from '@angular/core';
import { Adapter } from 'src/app/models/Adapter';
import { InputEntry } from 'src/app/models/CCInput';
import { CriptoCurrency } from 'src/app/models/CriptoCurrency';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { Util } from 'src/app/Util/Util';
import inputdata from  'src/assets/inputdata/input.json';

@Component({
  selector: 'ccurrency',
  templateUrl: './ccurrency.component.html',
  styleUrls: ['./ccurrency.component.css'],
  providers: [CurrencyDataService]
})

export class CcurrencyComponent implements OnInit {

  @Input() showEntries!: boolean;
  currencyList : Array<CriptoCurrency> = [];

  constructor(private service : CurrencyDataService) { }

  ngOnInit(): void {
    this.prepareCurrencies();
  }
  
  prepareCurrencies(): void {
    inputdata.ccdata.forEach(cc => {
      this.service.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CriptoCurrency[]) => 
      {
        ccList[0].entryList = Adapter.prepareEntryList(<InputEntry[]> cc.entryList, ccList[0].current_price);
        ccList[0].percColor= Util.preparePercColor(ccList[0].price_change_percentage_24h);
        ccList[0].trending= Util.prepareTrending(ccList[0].price_change_percentage_24h);
        const avgData : number [] = Util.calculateBuyPriceAverage(<InputEntry[]> cc.entryList);
        ccList[0].totalQty= avgData[0];
        ccList[0].buyPriceAverage= avgData[1];
        ccList[0].buyPriceAveragePerc= Util.calculatePerc(ccList[0].current_price, ccList[0].buyPriceAverage);
        ccList[0].buyPriceAverageGainLoss= Util.calculateActualGainLoss(ccList[0].totalQty, ccList[0].current_price, ccList[0].buyPriceAverage);
        this.currencyList.push(ccList[0]);
      },
      error => console.log(error.status)
      );
    });
  }
  
}
