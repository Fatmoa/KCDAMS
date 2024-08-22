import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPsychologComponent } from './view-psycholog.component';

describe('ViewPsychologComponent', () => {
  let component: ViewPsychologComponent;
  let fixture: ComponentFixture<ViewPsychologComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPsychologComponent]
    });
    fixture = TestBed.createComponent(ViewPsychologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
