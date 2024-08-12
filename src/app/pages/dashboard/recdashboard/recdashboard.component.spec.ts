import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecdashboardComponent } from './recdashboard.component';

describe('RecdashboardComponent', () => {
  let component: RecdashboardComponent;
  let fixture: ComponentFixture<RecdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecdashboardComponent]
    });
    fixture = TestBed.createComponent(RecdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
