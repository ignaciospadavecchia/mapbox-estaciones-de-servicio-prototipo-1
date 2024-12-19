import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-station-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './station-filter.component.html',
  styleUrls: ['./station-filter.component.css']
})
export class StationFilterComponent {
  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stationService: StationService
  ) {
    this.filterForm = this.fb.group({
      status: ['']
    });

    // Subscribe to form changes
    this.filterForm.get('status')?.valueChanges.subscribe(value => {
      this.stationService.filterByStatus(value);
    });
  }
}
