import { Injectable } from '@angular/core';
import { Entry } from "./Entry";

@Injectable({
  providedIn: 'root',
})

export class CryptoCurrency {
  symbol!: String;
  image!: String;
  id!: String;
  last_updated!: String;
  market_cap_rank!: number;
  name!: String;
  current_price!: number;
  price_change_percentage_24h!: number;
  entryList!: Entry[];
  trending!: String;
  buyPriceAverage!: number;
  buyPriceAveragePerc!: number;
  buyPriceAverageGainLoss!: number;
  totalQty!: number;
  actualValue!: number;

  // ATH Data
  ath!: number;
  ath_change_percentage!: number;
  ath_date!: string;

  // ATH Data 24
  high_24h!: number;
  low_24h!: number;
  market_cap_change_percentage_24h!: number;
}

