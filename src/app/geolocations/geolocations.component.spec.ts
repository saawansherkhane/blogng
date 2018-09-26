import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationsComponent } from './geolocations.component';

describe('GeolocationsComponent', () => {
  let component: GeolocationsComponent;
  let fixture: ComponentFixture<GeolocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
