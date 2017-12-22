import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { TourcitieslistComponent } from './components/tourcitieslist/tourcitieslist.component';
import { PlaceslistComponent } from './components/placeslist/placeslist.component';
// import { TourService } from './services/tour.service';


@NgModule({
  declarations: [
    AppComponent,
    TourcitieslistComponent,
    PlaceslistComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, TourcitieslistComponent]
})
export class AppModule { }
