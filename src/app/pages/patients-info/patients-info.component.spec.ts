import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsInfoComponent } from './patients-info.component';

describe('PatientsInfoComponent', () => {
  let component: PatientsInfoComponent;
  let fixture: ComponentFixture<PatientsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsInfoComponent]
    });
    fixture = TestBed.createComponent(PatientsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
