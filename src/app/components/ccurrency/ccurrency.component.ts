import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InputEntry } from 'src/app/models/CCInput';
import { CriptoCurrency } from 'src/app/models/CriptoCurrency';
import { Entry } from 'src/app/models/Entry';
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
        ccList[0].entryList = this.prepareEntryList(<InputEntry[]> cc.entryList);
        ccList[0].percColor= this.preparePercColor(ccList[0].price_change_percentage_24h);
        this.currencyList.push(ccList[0]);
      },
      error => console.log(error.status)
      );
    });
  }

  prepareEntryList( entryList : InputEntry[]) : Entry[] {
    let entries: Array<Entry> = [];
    if(entryList)
      entryList.forEach(e => {
        let eOut : Entry = new Entry;
        eOut.price = e.price;
        eOut.date = e.date;
        eOut.qty = e.qty;
        eOut.staking = e.staking;
        entries.push(eOut);
      });

    return entries;
  }

  preparePercColor( perc : number) : String {
    if(perc < 0)
      return "red";
    return "green";
  }
}
