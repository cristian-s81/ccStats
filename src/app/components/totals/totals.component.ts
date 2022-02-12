import { Component, Input, OnInit } from '@angular/core';
import { BalanceData } from 'src/app/models/BalanceData';
import { CryptoCurrency } from 'src/app/models/CryptoCurrency';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Util } from 'src/app/Util/Util';

@Component({
  selector: 'totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  @Input() balance: BalanceData = new BalanceData();
  usdtEuro: number = 0;
  actualValue: number = 0;
  gainLoss: number = 0;
  currency: string = "$";
  isEuro: boolean = true;

  constructor(private currencyService: CurrencyDataService, private userDataservice: UserDataService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencyData(this.userDataservice.getUserFiat(), 'tether').subscribe((ccList: CryptoCurrency[]) => {
      this.usdtEuro = ccList[0].current_price;
      this.actualValue = this.balance.actualValue;
      this.gainLoss = this.balance.gainLoss;
      this.balance.starting_balance = Math.round(1 / this.usdtEuro * this.userDataservice.getStartingCapital());
      this.convertFiatCurrency();
    },
      error => console.log(error.status)
    );

  }

  convertFiatCurrency() {
    if (this.isEuro) {
      this.actualValue = Util.convertToEuro(this.balance.actualValue, this.usdtEuro);
      this.gainLoss = Util.convertToEuro(this.balance.gainLoss, this.usdtEuro);
      this.currency = "€";
      this.isEuro = false;
    } else {
      this.actualValue = this.balance.actualValue, this.usdtEuro;
      this.gainLoss = this.balance.gainLoss, this.usdtEuro;
      this.currency = "$";
      this.isEuro = true;
    }
  }

}
