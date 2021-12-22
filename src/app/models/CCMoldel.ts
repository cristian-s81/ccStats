import { Injectable } from '@angular/core';
import { CryptoCurrency } from './CryptoCurrency';
import { BalanceData } from './BalanceData';

@Injectable({
    providedIn: 'root',
})

export class CCModel {
    user!: String;
    cryptos!: CryptoCurrency[];
    balance!: BalanceData;
}