import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CriptoCurrency } from 'src/app/models/CriptoCurrency';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  usdtEuro: number = 0;
  @Input() totalGainLoss: number = 0;

  // @Input() currencyList: Array<CriptoCurrency> = [];
  // @Input() currencyList: Array<CriptoCurrency> = [];

  // currencyList$!: Observable<Array<CriptoCurrency>>;

  constructor(private currencyService: CurrencyDataService, private userDataservice: UserDataService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencyData(this.userDataservice.getUserFiat(), 'tether').subscribe((ccList: CriptoCurrency[]) => {
      this.usdtEuro = ccList[0].current_price;
    },
      error => console.log(error.status)
    );

    // this.currencyList$ = of(this.currencyList);
    // this.totalGainLoss = this.calculateTotalValue(this.currencyList);
    // console.log(this.currencyList);
  }

  // calculateTotalValue(currencyList: Observable<Array<CriptoCurrency>>): number {
  calculateTotalValue(currencyList: Array<CriptoCurrency>): number {
    let total: number = 0;
    currencyList.forEach(c => {
      c.entryList.forEach(e => {
        total = total + e.gainLoss;
      })
    });
    return total;
  }

}
