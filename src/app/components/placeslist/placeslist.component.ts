import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TourService } from '../../services/tour.service';

declare const google: any;

@Component({
  selector: 'app-placeslist',
  templateUrl: './placeslist.component.html',
  styleUrls: ['./placeslist.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PlaceslistComponent implements OnInit {

  @Input() showhidePlaces: Boolean;
  @Input() listPlaces: any[];
  @Input() cityNum: any;
  @Input() listCities: any[];

  constructor(private tour: TourService) { 
  }

  ngOnInit() {
    
  }

  // Life cycle hook - On changes method required for monitoring the @Input changes of parent component;
  ngOnChanges() {

  }

  // invoked when Locate button clicked
  showMap() {
    let x,y : any;

  // fix the latitude & longitude based on the selected city;

    if (this.cityNum == 1){
        x = 11.913860;
        y = 79.814472; 
    }
    if (this.cityNum == 2){
        x = 10.088933;
        y = 77.059525; 
    }
    if (this.cityNum == 3){
        x = 10.238114;
        y = 77.489182; 
    }
    if (this.cityNum == 4){
        x = 11.775251;
        y = 78.209258; 
    }

    // build map properties, marker for showing the map via google maps API; <script> tag added in index.html;
    let mapProp =  {
      center: new google.maps.LatLng(x, y),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    let marker = new google.maps.Marker({
      position: {lat: x, lng: y},
      map: map
    })
  }

//Invoked when Book button clicked.
bookHotel(i) {

  // Manipulate the City's Hotel iteration for booking flag;
  this.listCities[this.cityNum - 1].PlacesToVisit[i].booked = true;

  //Pass updated JSON to the PUT service; Will get an alert on successful update;
  this.tour.putCityTour(this.cityNum, this.listCities[this.cityNum - 1]).subscribe(()=> alert("Hotel booked. Congrats!"));

}


}
