import { Component, OnInit } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1OETXxbsNTH3PdHTf0086P3cVFDr3r7g",
  authDomain: "ccstats-cri.firebaseapp.com",
  projectId: "ccstats-cri",
  storageBucket: "ccstats-cri.appspot.com",
  messagingSenderId: "1093329670568",
  appId: "1:1093329670568:web:daeccc496c2516cd800d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Christo Currency Stats';

  constructor() {
  }
  
  ngOnInit(): void {
  }
  
}
