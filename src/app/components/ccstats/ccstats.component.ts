import { Component, OnInit } from '@angular/core';
import { CCInput } from 'src/app/models/CCInput';
import InputData from 'src/assets/inputdata/input.json';

@Component({
  selector: 'ccstats',
  templateUrl: './ccstats.component.html',
  styleUrls: ['./ccstats.component.css']
})
export class CcstatsComponent implements OnInit {

  showEntries: boolean = true;
  showTotals: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  prepareCCInput() {

  }
}
