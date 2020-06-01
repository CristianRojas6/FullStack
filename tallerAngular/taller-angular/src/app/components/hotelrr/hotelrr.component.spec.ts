import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRRComponent } from './hotelrr.component';

describe('HotelRRComponent', () => {
  let component: HotelRRComponent;
  let fixture: ComponentFixture<HotelRRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
