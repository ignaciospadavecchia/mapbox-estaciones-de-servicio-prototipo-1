import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationFilterComponent } from './station-filter.component';

describe('StationFilterComponent', () => {
  let component: StationFilterComponent;
  let fixture: ComponentFixture<StationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
