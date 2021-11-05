import { CriptoCurrency } from "./CriptoCurrency";

export interface Entry {
    qty: number; 
    price: number;
    date: string;
    perc: number;
    actualValue: number;
    gainLoss: number;
    ccRef: CriptoCurrency;
}