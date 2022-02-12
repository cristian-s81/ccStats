import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoCurrency } from 'src/app/models/CryptoCurrency';
import { CcentryComponent } from '../ccentry/ccentry.component';

@Component({
  selector: 'app-simulation-dialog',
  templateUrl: './simulation-dialog.component.html',
  styleUrls: ['./simulation-dialog.component.css']
})
export class SimulationDialogComponent implements OnInit {

  cc: CryptoCurrency = new CryptoCurrency();
  displayedColumns: string[] = ['price', 'qty', 'value', 'date'];
  dataSource = this.cc.entryList;

  constructor(public dialogRef: MatDialogRef<SimulationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { data: CryptoCurrency },
  ) {
    this.cc = data.data;
    this.dataSource = this.cc.entryList;
  }

  addEntry(): void {
    this.dataSource.push(this.cc.entryList[0])
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.cc.name);
  }

  calculateEntryVal(qty: number, price: number): number {
    return Math.round(price * qty * 100) / 100;
  }

}
