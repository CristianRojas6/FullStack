import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaaeComponent } from './regaae.component';

describe('RegaaeComponent', () => {
  let component: RegaaeComponent;
  let fixture: ComponentFixture<RegaaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegaaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegaaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
