import { InputEntry } from "./CCInput";
import { Entry } from "./Entry";

export class Adapter {

static prepareEntryList( entryList : InputEntry[], current_price : number) : Entry[] {
    let entries: Array<Entry> = [];
    if(entryList)
      entryList.forEach(e => {
        let eOut : Entry = new Entry;
        eOut.price = e.price;
        eOut.date = e.date;
        eOut.qty = e.qty;
        eOut.staking = e.staking;
        eOut.actualPrice = current_price;
        entries.push(eOut);
      });

    return entries;
  }
}