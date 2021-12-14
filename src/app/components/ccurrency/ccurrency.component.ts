import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adapter } from 'src/app/models/Adapter';
import { InputEntry } from 'src/app/models/CCInput';
import { CriptoCurrency } from 'src/app/models/CriptoCurrency';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Util } from 'src/app/Util/Util';

@Component({
  selector: 'ccurrency',
  templateUrl: './ccurrency.component.html',
  styleUrls: ['./ccurrency.component.css'],
  providers: [CurrencyDataService, UserDataService]
})

export class CcurrencyComponent implements OnInit {

  @Input() showEntries!: boolean;
  @Input() showTotals!: boolean;

  // @Output() ccEmitter = new EventEmitter<{ currencyList: Array<CriptoCurrency> }>();

  currencyList: Array<CriptoCurrency> = [];
  totalGainLoss: number = 0;

  constructor(private currencyService: CurrencyDataService, private userDataservice: UserDataService) {

    // this.currencyService.getMessage().subscribe(ccList => {
    //   this.currencyList = ccList;
    // }
    // )
  }

  ngOnInit(): void {
    // this.currencyService.sendMessage(this.userDataservice.getCCData());
    this.prepareCurrencies();
  }

  prepareCurrencies(): void {
    let res = this.currencyService.getCurrencyDataList(this.userDataservice.getCCData());
    this.currencyList = res[0];
    this.totalGainLoss = res[1];
    console.log('avg ' + this.currencyList[0].buyPriceAverageGainLoss);
    console.log(this.totalGainLoss);
  }
  /*
    prepareCurrenciesOLD(): void {
      this.userDataservice.getCCData().forEach(cc => {
        this.currencyService.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CriptoCurrency[]) => {
          ccList[0].entryList = Adapter.prepareEntryList(<InputEntry[]>cc.entryList, ccList[0].current_price);
          ccList[0].percColor = Util.preparePercColor(ccList[0].price_change_percentage_24h);
          ccList[0].trending = Util.prepareTrending(ccList[0].price_change_percentage_24h);
          const avgData: number[] = Util.calculateBuyPriceAverage(<InputEntry[]>cc.entryList);
          ccList[0].totalQty = avgData[0];
          ccList[0].buyPriceAverage = avgData[1];
          ccList[0].buyPriceAveragePerc = Util.calculatePerc(ccList[0].current_price, ccList[0].buyPriceAverage);
          ccList[0].buyPriceAverageGainLoss = Util.calculateActualGainLoss(ccList[0].totalQty, ccList[0].current_price, ccList[0].buyPriceAverage);
          this.totalGainLoss = this.totalGainLoss + ccList[0].buyPriceAverageGainLoss;
          this.currencyList.push(ccList[0]);
        },
          error => console.log(error.status)
        );
      });
    }
  */
  getTrending(val: number): String {
    return Util.prepareTrending(val);
  }
}
