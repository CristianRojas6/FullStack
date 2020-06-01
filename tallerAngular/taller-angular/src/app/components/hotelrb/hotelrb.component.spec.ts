import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRBComponent } from './hotelrb.component';

describe('HotelRBComponent', () => {
  let component: HotelRBComponent;
  let fixture: ComponentFixture<HotelRBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
