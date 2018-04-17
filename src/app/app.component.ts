import { Component, Output } from '@angular/core';
import { Quotes} from './classQuote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteArray : Array<Quotes> = [];
  eventData : Quotes;

  constructor(){}
  dataFromChild(eventData:Quotes){  //expect a Quotes class type
    console.log(`from the emit ${eventData}`);
    this.eventData = eventData;
    this.quoteArray.push(eventData);
  }

}
