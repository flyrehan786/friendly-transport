import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesInsurranceNewComponent } from './vehicles-insurrance-new.component';

describe('VehiclesInsurranceNewComponent', () => {
  let component: VehiclesInsurranceNewComponent;
  let fixture: ComponentFixture<VehiclesInsurranceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesInsurranceNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesInsurranceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
