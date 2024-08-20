import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObservationComponent } from './view-observation.component';

describe('ViewObservationComponent', () => {
  let component: ViewObservationComponent;
  let fixture: ComponentFixture<ViewObservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewObservationComponent]
    });
    fixture = TestBed.createComponent(ViewObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
