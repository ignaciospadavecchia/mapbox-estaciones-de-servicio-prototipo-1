import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: mapboxgl.Map;

  constructor(private stationService: StationService) {}

  ngOnInit() {
    // Initialize map
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-3.7038, 40.4168], // Madrid center
      zoom: 14,
      accessToken: environment.mapboxToken
    });

    // Add markers when stations change
    this.stationService.getStations().subscribe(stations => {
      // Clear existing markers
      const markers = document.getElementsByClassName('mapboxgl-marker');
      while(markers[0]) {
        markers[0].remove();
      }

      // Add new markers
      stations.forEach(station => {
        const marker = new mapboxgl.Marker({
          color: station.capacity === 0 ? '#dc3545' : '#28a745'
        })
          .setLngLat([station.longitude, station.latitude])
          .addTo(this.map);

        // Add click event
        marker.getElement().addEventListener('click', () => {
          this.stationService.setSelectedStation(station);
        });
      });

      // Fit map to show all markers if there are stations
      if (stations.length > 0) {
        const bounds = new mapboxgl.LngLatBounds();
        stations.forEach(station => {
          bounds.extend([station.longitude, station.latitude]);
        });
        this.map.fitBounds(bounds, {
          padding: 50
        });
      }
    });
  }
}