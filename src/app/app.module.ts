import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CcstatsComponent } from './components/ccstats/ccstats.component';
import { CcurrencyComponent } from './components/ccurrency/ccurrency.component';
import { CcentryComponent } from './components/ccentry/ccentry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'; // For Angular Material support

@NgModule({
  declarations: [
    AppComponent,
    CcstatsComponent,
    CcurrencyComponent,
    CcentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
