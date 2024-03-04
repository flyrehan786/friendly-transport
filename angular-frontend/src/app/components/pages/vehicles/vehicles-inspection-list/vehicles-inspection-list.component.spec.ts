import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesInspectionListComponent } from './vehicles-inspection-list.component';

describe('VehiclesInspectionListComponent', () => {
  let component: VehiclesInspectionListComponent;
  let fixture: ComponentFixture<VehiclesInspectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesInspectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesInspectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
