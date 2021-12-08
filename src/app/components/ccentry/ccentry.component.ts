import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { Util } from 'src/app/Util/Util';

@Component({
  selector: 'ccentry',
  templateUrl: './ccentry.component.html',
  styleUrls: ['./ccentry.component.css']
})
export class CcentryComponent implements OnInit {
  @Input() entry: Entry = new Entry;

  perc!: number;
  gainloss!: number;
  staking!: String[];


  constructor() {
  }

  ngOnInit(): void {
    this.perc = Util.calculatePerc(this.entry.actualPrice, this.entry.price);
    this.gainloss = Util.calculateActualGainLoss(this.entry.qty, this.entry.actualPrice, this.entry.price);
    this.staking = this.prepareStaking(this.entry.staking);
  }

  getTrending(val: number): String {
    return Util.prepareTrending(val);
  }

  prepareStaking(val: number): String[] {
    switch (val) {
      case 2:
        return ["lock", "red"];
      case 1:
        return ["lock", "yellow"];
      case 0:
      default:
        return ["lock_open", "green"];
    }
  }


}
