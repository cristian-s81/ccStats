import { Component,  Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { Util } from 'src/app/Util/Util';

@Component({
  selector: 'ccentry',
  templateUrl: './ccentry.component.html',
  styleUrls: ['./ccentry.component.css']
})
export class CcentryComponent implements OnInit {
  @Input() entry: Entry = new Entry;

  perc! : number;
  gainloss! : number;


  constructor() { 
  }

  ngOnInit(): void {
    this.perc = Util.calculatePerc(this.entry.actualPrice, this.entry.price);
    this.gainloss = Util.calculateActualGainLoss(this.entry.qty, this.entry.actualPrice, this.entry.price);
  }

}
