import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CCModel } from 'src/app/models/CCMoldel';
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
  ccModel: CCModel = new CCModel();

  constructor(private currencyService: CurrencyDataService, private userDataservice: UserDataService) { }

  ngOnInit(): void {
    this.prepareCurrencies();
  }

  prepareCurrencies(): void {
    this.ccModel = this.currencyService.getCurrencyDataList(this.userDataservice.getCCData());
  }

  getTrending(val: number): String {
    return Util.prepareTrending(val);
  }

}
