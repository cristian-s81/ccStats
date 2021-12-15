import { Injectable } from '@angular/core';
import { CryptoCurrency } from "./CryptoCurrency";

@Injectable({
  providedIn: 'root',
})

export class Entry {
  qty!: number;
  price!: number;
  date!: string;
  perc!: number;
  actualPrice!: number;
  gainLoss!: number;
  ccRef!: CryptoCurrency;
  staking!: number;
}