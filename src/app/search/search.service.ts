
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/Http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do' ;
@Injectable()
export class SearchService {
  
 
 getStockURL = 'http://ec2-13-126-182-204.ap-south-1.compute.amazonaws.com:8096/getDetails';
  
  
  
  
  constructor(private _http: Http ) {
   
  }
  
  getStockValue(stock: string): Observable <any>  {
    
    const params = new URLSearchParams();
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    params.set('tick', stock);
    return this._http.get(this.getStockURL, {search: params})
    .map((response: Response) => <any> (response.json()));
  }
   
}