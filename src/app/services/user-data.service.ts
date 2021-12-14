import { Injectable } from '@angular/core';
import inputdata from 'src/assets/inputdata/input.json';
import { CCdata } from '../models/CCInput';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getCCData(): CCdata[] {
    return inputdata.ccdata;
  }

  getUserFiat(): String {
    return inputdata.currency;
  }
}
