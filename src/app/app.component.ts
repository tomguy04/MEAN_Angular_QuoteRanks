import { Component, Output } from '@angular/core';
import { Quotes} from './classQuote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() quotes:Quotes;
  // quote = new Quotes();
  // quoteArray : Array<Quotes> = [];

  // onSumbit(){
  //   console.log (`the quote ${this.quote}`);
  //   this.quoteArray.push(this.quote);
  //   this.quote = new Quotes();
  //   console.log(`the quote array ${this.quoteArray}`);
    
  // }
  constructor(){}
  dataFromChild(eventData){
    console.log(`from the emit ${eventData}`);
  }

}
