import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesInspectionNewComponent } from './vehicles-inspection-new.component';

describe('VehiclesInspectionNewComponent', () => {
  let component: VehiclesInspectionNewComponent;
  let fixture: ComponentFixture<VehiclesInspectionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesInspectionNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesInspectionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
