import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CcstatsComponent } from './components/ccstats/ccstats.component';
import { CcurrencyComponent } from './components/ccurrency/ccurrency.component';
import { CcentryComponent } from './components/ccentry/ccentry.component';
import { TotalsComponent } from './components/totals/totals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module'; // For Angular Material support

import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'fede', component: CcstatsComponent },
];

const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    CcstatsComponent,
    CcurrencyComponent,
    CcentryComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
