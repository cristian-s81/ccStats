import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class BalanceData {
    gainLoss!: number;
    actualValue!: number;
    starting!: number;
}