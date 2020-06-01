import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSLComponent } from './hotelsl.component';

describe('HotelSLComponent', () => {
  let component: HotelSLComponent;
  let fixture: ComponentFixture<HotelSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
