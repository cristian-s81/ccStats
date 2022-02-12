import { Injectable } from '@angular/core';
import inputdata from 'src/assets/inputdata/input.json';
import inputdataFede from 'src/assets/inputdata/inputFede.json';
import { CCdata } from '../models/CCInput';
import { getFirestore, collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore"




@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user !: String;
  constructor() {
  }

  async setUser(user: String) {
    this.user = user;


    // const db = getFirestore();
    // const querySnapshot = await getDocs(collection(db, "Wallets"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    // const owners = await collection(db, "users");
    // await setDoc(doc(owners, "" + user), { name: "Cristian", path: "cri" });

    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     id: "Cristian",
    //     name: "Cristian",
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    // const owners = collection(db, "user");
    // await setDoc(doc(owners, "cri2"), { "user": "cri" });
    // await setDoc(doc(ref, "cri"), inputdata.ccdata[2]);
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
    return this.isDefalut() ? inputdata.starting_balance : inputdataFede.starting_balance;
  }

  isDefalut(): boolean {
    return this.user != "fede";
  }
}
