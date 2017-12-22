import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Tour } from '../models/tour'
import { Observable, } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class TourService {

  constructor(private http: Http) { } 


  getCityTour(): Observable<Tour[]>{
    return this.http.get("http://localhost:3000/Tours").map(res => res.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

}
