export interface CCInput {
    cc: String;
    fiat: String;
    entryList: InputEntry[];
}

export interface InputEntry {
    qty: number; 
    price: number;
    date: string;
    perc: number;
    staking: number;
}