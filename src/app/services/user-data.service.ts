import { Injectable } from '@angular/core';
import inputdata from 'src/assets/inputdata/input.json';
import inputdataFede from 'src/assets/inputdata/inputFede.json';
import { CCdata } from '../models/CCInput';
import { getFirestore, collection, getDocs } from "firebase/firestore"


// const db = getFirestore();

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user !: String;
  constructor() {
  }

  async setUser(user: String) {
    this.user = user;
    // const querySnapshot = await getDocs(collection(db, "Wallets"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
  }


  /*
   writeUserData(user : String) {
    const db = getDatabase();
    set(ref(db, 'Wallets/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  */

  getCCData(): CCdata[] {
    return this.isDefalut() ? inputdata.ccdata : inputdataFede.ccdata;
  }

  getUserFiat(): String {
    return this.isDefalut() ? inputdata.currency : inputdataFede.currency;
  }

  getStartingCapital(): number {
    return this.isDefalut() ? inputdata.starting : inputdataFede.starting;
  }

  isDefalut(): boolean {
    return this.user != "fede";
  }
}
