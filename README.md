# TourismExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

*****************

#Tourlist component 
Shows the different cities to explore; Get the Cities data on Init of this component and data manipulated to pass it to child component. GET request to JSON server TouristDB.

#Placeslist component 
 Shows the different places to explore in the seected city. Made as Parent-Child component interaction between these two. @Input used.
 Book button helps to book the hotel. Button will turn Full on booking. PUT request to JSON server TouristDB

#GoogleMapsAPI 
used to show the location of City chosen. Locate button clicks lead to the map.

*****************