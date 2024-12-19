import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  // Mock data for stations
  private stations: Station[] = [
    {
      id: 1,
      name: 'Estación Central',
      latitude: 40.4168,
      longitude: -3.7038,
      address: 'Calle Principal 123',
      capacity: 4,
      status: 'Disponible'
    },
    {
      id: 2,
      name: 'Estación Central II',
      latitude: 40.4158,
      longitude: -3.7058,
      address: 'Calle Secundaria 456',
      capacity: 0,
      status: 'Completa'
    }
    // Add more stations as needed
  ];

  private selectedStation = new BehaviorSubject<Station | null>(null);
  private filteredStations = new BehaviorSubject<Station[]>(this.stations);

  // Get all stations
  getStations(): Observable<Station[]> {
    return this.filteredStations.asObservable();
  }

  // Filter stations by status
  filterByStatus(status: string | null): void {
    if (!status) {
      this.filteredStations.next(this.stations);
      return;
    }
    
    const filtered = this.stations.filter(station => {
      if (status === 'Completa') {
        return station.capacity === 0;
      }
      return station.status === status;
    });
    this.filteredStations.next(filtered);
  }

  // Set selected station
  setSelectedStation(station: Station | null): void {
    this.selectedStation.next(station);
  }

  // Get selected station
  getSelectedStation(): Observable<Station | null> {
    return this.selectedStation.asObservable();
  }
}