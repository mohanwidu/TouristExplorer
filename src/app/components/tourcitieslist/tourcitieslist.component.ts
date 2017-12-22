import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TourService } from '../../services/tour.service';
import { Tour } from '../../models/tour';

@Component({
  selector: 'app-tourcitieslist',
  templateUrl: './tourcitieslist.component.html',
  styleUrls: ['./tourcitieslist.component.css'],
  providers: [ TourService ],
  encapsulation: ViewEncapsulation.None
})
export class TourcitieslistComponent implements OnInit {

  listTour: any[];
  citySpecificPlaces: any[];
  showhideChild: Boolean = false;
  cityid: any;

  constructor(private tour: TourService) { 
  }

  ngOnInit() {

    //-------- Get the entire city details on Init from the service ---------
    this.tour.getCityTour().subscribe(Tours => 
      { 
        console.log("tours2", Tours);
        this.listTour = Tours; 
      });
  }

  showPlaces(cityid) {

    //---- On places to visit button click, toggle the child component view --------
    if (cityid == this.cityid) {
      this.showhideChild = !this.showhideChild;
    } else {
      this.showhideChild = true;
    }

    //------ Choose the placestovisit array of selected city index -------
    this.cityid = cityid;  
    this.citySpecificPlaces = this.listTour[this.cityid - 1].PlacesToVisit;
    console.log(this.citySpecificPlaces);
  
  }
}
