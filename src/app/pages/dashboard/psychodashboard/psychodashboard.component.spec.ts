import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychodashboardComponent } from './psychodashboard.component';

describe('PsychodashboardComponent', () => {
  let component: PsychodashboardComponent;
  let fixture: ComponentFixture<PsychodashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsychodashboardComponent]
    });
    fixture = TestBed.createComponent(PsychodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
