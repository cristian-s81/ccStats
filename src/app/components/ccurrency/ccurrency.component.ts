import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CriptoCurrency } from 'src/app/models/CriptoCurrency';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import inputdata from  'src/assets/inputdata/input.json';

@Component({
  selector: 'ccurrency',
  templateUrl: './ccurrency.component.html',
  styleUrls: ['./ccurrency.component.css'],
  providers: [CurrencyDataService]
})
export class CcurrencyComponent implements OnInit {

  private loading: boolean = false;
  currencyList : Array<CriptoCurrency> = [];

  constructor(private service : CurrencyDataService) { }

  ngOnInit(): void {
    this.prepareCurrencies();
  }
  
  prepareCurrencies(): void {
    inputdata.ccdata.forEach(cc => {
      this.service.getCurrencyData(cc.fiat, cc.cc).subscribe((ccList: CriptoCurrency[]) => 
      {
        console.log(ccList[0].name);
        this.currencyList.push(ccList[0]);
      },
      error => console.log(error.status)
      );
    });
  }

}
