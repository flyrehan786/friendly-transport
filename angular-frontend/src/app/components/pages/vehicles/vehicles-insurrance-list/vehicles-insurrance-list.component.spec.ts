import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesInsurranceListComponent } from './vehicles-insurrance-list.component';

describe('VehiclesInsurranceListComponent', () => {
  let component: VehiclesInsurranceListComponent;
  let fixture: ComponentFixture<VehiclesInsurranceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesInsurranceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesInsurranceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
