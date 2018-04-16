import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { QuoteServiceService } from  './quote-service.service'
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { GetQuotesComponent } from './get-quotes/get-quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    GetQuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [QuoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
