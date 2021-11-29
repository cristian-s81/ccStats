import { Injectable } from '@angular/core';
import { Entry } from "./Entry";

@Injectable({
    providedIn: 'root',
  })

export class CriptoCurrency {
    symbol!: String;
    image!: String;
    id!: String;
    last_updated!: String;
    market_cap_rank!: number;
    name!: String;
    current_price!: number;
    price_change_percentage_24h!: String;
    entryList!: Entry[];
}


