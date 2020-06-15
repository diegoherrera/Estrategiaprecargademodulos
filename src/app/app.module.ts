import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonModule } from './person/person.module';
import { CountryModule } from './country/country.module';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,    
    PersonModule,
    CountryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log('constructor de AppModule');
  }
}
