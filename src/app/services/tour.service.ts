import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Tour } from '../models/tour'
import { Observable, } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TourService {

  constructor(private http: Http) { } 

  //Get all city detials-----
  getCityTour(): Observable<Tour[]>{
    return this.http.get("http://localhost:3000/Tours").map(res => res.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

  //Update the cities hotel booking flag taking the id & data as input-------
  putCityTour(id, body): Observable<any>{
    return this.http.put("http://localhost:3000/Tours/"+id, body, httpOptions )
    .catch((error: any) => Observable.throw(error.json()));
  }

}
