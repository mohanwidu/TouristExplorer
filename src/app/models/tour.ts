export class Tour {

    cityname: String;
    PlacesToVisit: Object[];
    // hotelBooked: Boolean;

    constructor(cityname: String, placestovisit: Object[]) {
        this.cityname = cityname;
        this.PlacesToVisit = placestovisit;
        // this.hotelBooked = hotelBooked;
    }

}
