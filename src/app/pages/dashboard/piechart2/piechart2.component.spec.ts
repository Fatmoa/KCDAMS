import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechart2Component } from './piechart2.component';

describe('Piechart2Component', () => {
  let component: Piechart2Component;
  let fixture: ComponentFixture<Piechart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Piechart2Component]
    });
    fixture = TestBed.createComponent(Piechart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
