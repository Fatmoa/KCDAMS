import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursedashboardComponent } from './nursedashboard.component';

describe('NursedashboardComponent', () => {
  let component: NursedashboardComponent;
  let fixture: ComponentFixture<NursedashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NursedashboardComponent]
    });
    fixture = TestBed.createComponent(NursedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
