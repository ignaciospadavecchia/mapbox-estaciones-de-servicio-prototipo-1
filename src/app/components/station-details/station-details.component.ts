import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationService } from '../../services/station.service';
import { Station } from '../../models/station';

@Component({
  selector: 'app-station-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  selectedStation: Station | null = null;

  constructor(private stationService: StationService) {}

  ngOnInit() {
    this.stationService.getSelectedStation().subscribe(station => {
      this.selectedStation = station;
    });
  }
}
