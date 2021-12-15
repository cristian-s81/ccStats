import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ccstats',
  templateUrl: './ccstats.component.html',
  styleUrls: ['./ccstats.component.css']
})
export class CcstatsComponent implements OnInit {

  showEntries: boolean = false;
  showTotals: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  prepareCCInput() {

  }
}
