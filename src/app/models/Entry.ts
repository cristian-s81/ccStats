import { Injectable } from '@angular/core';
import { CriptoCurrency } from "./CriptoCurrency";

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
    ccRef!: CriptoCurrency;
    staking!: number;
}