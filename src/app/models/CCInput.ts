import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class CCInput {
    ccdata!: CCdata[];
}
export class CCdata {
    cc!: String;
    fiat!: String;
    entryList!: InputEntry[];
}

export class InputEntry {
    qty!: number; 
    price!: number;
    date!: string;
    staking!: number;
}