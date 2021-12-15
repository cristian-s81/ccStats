import { Component, Input, OnInit } from '@angular/core';
import { BalanceData } from 'src/app/models/BalanceData';
import { CryptoCurrency } from 'src/app/models/CryptoCurrency';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  usdtEuro: number = 0;
  @Input() balance: BalanceData = new BalanceData();

  constructor(private currencyService: CurrencyDataService, private userDataservice: UserDataService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencyData(this.userDataservice.getUserFiat(), 'tether').subscribe((ccList: CryptoCurrency[]) => {
      this.usdtEuro = ccList[0].current_price;
      console.log(this.usdtEuro);
      this.balance.starting = Math.round(1 / this.usdtEuro * this.userDataservice.getStartingCapital());
    },
      error => console.log(error.status)
    );

  }

}
