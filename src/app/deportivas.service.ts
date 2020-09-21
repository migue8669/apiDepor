import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from './modelApi.model';

@Injectable({
  providedIn: 'root'
})
export class DeportivasService {
 // imageDetailList: AngularFireList<any>;
url="https://api.the-odds-api.com/v3/odds/?sport=soccer_epl&region=uk&apiKey=14225cbeca216bab53196c5ea523caa2";
  constructor(private http: HttpClient) { }

  get():Observable<any> {
    // this.http.get(this.url).subscribe(data=>{
    //   console.log(data);
     return this.http.get(this.url);

  }
  } 