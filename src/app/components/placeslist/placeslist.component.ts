import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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

  constructor() { 
  }

  ngOnInit() {
    
  }

  // Life cycle hook - On changes method required for monitoring the @Input changes of parent component;
  ngOnChanges() {

  }

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


}
