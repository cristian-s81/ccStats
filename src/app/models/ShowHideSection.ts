import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ShowHideSection {
    showEntries: boolean = false;
    showTotals: boolean = true;
    showATH: boolean = true;

}