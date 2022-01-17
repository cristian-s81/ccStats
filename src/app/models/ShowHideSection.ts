import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class ShowHideSection {
    showEntries: boolean = true;
    showTotals: boolean = true;
    showATH: boolean = false;
    showEntryDate: boolean = false;

}