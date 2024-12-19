import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { StationFilterComponent } from "./components/station-filter/station-filter.component";
import { StationDetailsComponent } from "./components/station-details/station-details.component";
import { MapComponent } from "./components/map/map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, StationFilterComponent, StationDetailsComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mapbox-estaciones-t1';
}
