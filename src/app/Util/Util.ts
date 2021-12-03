import { InputEntry } from "../models/CCInput";

export class Util {

    static calculateBuyPriceAverage( entryList : InputEntry[]): number[] {
      let res : number[] = [];
      let qty : number = 0;
      let amount : number = 0;
    if(entryList)
      entryList.forEach(e => {
        qty+=e.qty;
        amount+=e.price*e.qty;
      });
      res[0] = Math.round( qty * 10000 + Number.EPSILON ) / 10000
      res[1] = Math.round( amount/qty * 10000 + Number.EPSILON ) / 10000 
      return res;
    }
    
    static preparePercColor( perc : number) : String {
        if(perc < 0)
          return "red";
        return "green";
      }
    static prepareTrending( perc : number) : String {
        if(perc < 0)
          return "trending_down";
        return "trending_up";
      }


    static calculatePerc(actualPrice : number, buyPrice : number) : number {
        return (Math.round((actualPrice * 100 / buyPrice) - 100));
    }

    // static calculateActualValue(qty : number, actualPrice : number) {
    //     let val = Math.round(qty * actualPrice);
    //     totalValueUSD += val; 
    //     return  val + '$ (' + convertToEuro(val)+'€)';
    // }

    static calculateActualGainLoss(qty : number, actualPrice : number, buyPrice : number) : number {
        let val = (Math.round(qty * actualPrice) - Math.round(qty * buyPrice)) ;
        // totalGainUSDT = totalGainUSDT+val;
        // return val + '$ (' + convertToEuro(val)+'€)';
        return val;
    }

    static convertToEuro(usdtValue : number, usdtEuro : number) : number {
        let val = Math.round(usdtValue * usdtEuro);
        return val;
    }
    static convertToUsd(eurValue : number, usdtEuro : number) : number {
        let val = Math.round( 1/usdtEuro * eurValue);
        return val;
    }

}