import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Input } from '@angular/core';
import { Quotes } from '../classQuote';

@Component({
  selector: 'app-get-quotes',
  templateUrl: './get-quotes.component.html',
  styleUrls: ['./get-quotes.component.css']
})
export class GetQuotesComponent implements OnInit {
  @Input() quotes: Array<Quotes>;
  
  constructor() { }
  
  

  ngOnInit() {
    
  }

}
