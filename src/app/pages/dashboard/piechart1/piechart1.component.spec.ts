import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechart1Component } from './piechart1.component';

describe('Piechart1Component', () => {
  let component: Piechart1Component;
  let fixture: ComponentFixture<Piechart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Piechart1Component]
    });
    fixture = TestBed.createComponent(Piechart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
