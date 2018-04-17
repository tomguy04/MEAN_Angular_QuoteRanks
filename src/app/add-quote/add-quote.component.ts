import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quotes } from '../classQuote';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  // @Input() theQuotes: Array<Quotes>;
  @Output() aTaskEventEmitter = new EventEmitter<Quotes>();
  quote = new Quotes();
  // quotes = [];
  // bool = false;
  onSubmit(formData:NgForm){
    console.log(this.quote);
    // this.quotes.push(this.quote);
    // this.bool = true;
    // console.log(this.quotes);
    this.aTaskEventEmitter.emit(this.quote); //we can pass in any data type
    this.quote = new Quotes();
    formData.reset();
  }
  constructor() { }

  // triggerEvent(){
  //   //  3 Emit the Event
  //   this.aTaskEventEmitter.emit({quotes: this.quotes}); //we can pass in any data type
  // }

  ngOnInit() {
  }

}
