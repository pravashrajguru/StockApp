import { SearchService } from './search.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  stock: string;
  SearchResult: Response;
  gotresult:boolean = true;
  exception: string;
  
  title = 'StockSearchLimited';
constructor( 
  private _search: SearchService ) {
  }
  
  getStockSymbol(stock: string) {
 	this.gotresult=true;
    console.log('The Stock Value to be searched is ' + stock );
    this._search.getStockValue(stock).subscribe (
      result => {
      this.SearchResult = result;
       console.log("Got response as");
       },
      error => {
       this.gotresult=false;
       console.log("No response");
      } 
      
    );
     console.log(' We got the response for ' + this.SearchResult);
  }
}
